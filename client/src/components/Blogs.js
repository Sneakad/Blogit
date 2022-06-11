import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import '../styles/blogs.css'

const Blogs = () => {

    const [datalist, setDatalist] = useState([]);

    const cat = () => {
        Axios.get('https://blogit96.herokuapp.com/read').then((response) => {
            console.log(response.data)
            setDatalist(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        cat();
    }, [])


    return (
        <div className='huge'>
            <h1 className='blg-lst'>
                List of Blogs
            </h1>
            {datalist ? datalist.map((val, idx) => {
                return <div className='blog-container' key={idx}>
                    <a href={`/detail?${val._id}`}>
                        <h2>{val.title}</h2>
                        <p className='snippet'>{val.snippet}</p>
                    </a>
                </div>
            }) : <h1>Loading...</h1>}
        </div>
    )
}

export default Blogs