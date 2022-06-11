import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../styles/details.css'

function Details() {
    const navigate = useNavigate();
    const [details, setDetails] = useState({})

    const deletedb = () => {
        axios.post('https://blogit96.herokuapp.com/delete', { id: window.location.search.slice(1, window.location.search.length) });
        navigate("/");
    }

    const id = window.location.search.slice(1, window.location.search.length);
    useEffect(() => {
        // params = new URLSearchParams(window.location.search)
        // console.log(window.location.search.slice(1, window.location.search.length))
        axios.post(`https://blogit96.herokuapp.com/getbyid`, { id: window.location.search.slice(1, window.location.search.length) }).then((response) => {
            setDetails(response.data)
            console.log(details)
        }).catch((err) => {
            console.log(err)
        })
    })

    const mydata = {
        utitle: details.title,
        usnippet: details.snippet,
        ubody: details.body,
    }


    return (
        <div className='details'>
            <h1>{details.title}</h1>
            <h2 className="snippet">{details.snippet}</h2>
            <div>{details.body}</div>
            <button onClick={deletedb} className='delete'>Delete</button>

            {/* link is used to send the values to the update page as defaultValues */}
            <Link to={`/update?${id}`} state={mydata}><button >Update</button></Link>
        </div >

    )
}

export default Details