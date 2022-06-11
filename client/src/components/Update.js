import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/forms.css'
import axios from 'axios'


function Update() {
    //we get the json data from the Link fron details page and then we access it in the input
    const location = useLocation();
    const data = location.state;
    console.log(data);

    const [utitle, setuTitle] = useState(data.utitle);
    const [usnippet, setuSnippet] = useState(data.usnippet);
    const [udesc, setuDesc] = useState(data.ubody);

    const id = window.location.search.slice(1, window.location.search.length);

    const navigate = useNavigate();

    const updatedata = () => {
        axios.patch(`https://blogit96.herokuapp.com/updated`, { utitle: utitle, usnippet: usnippet, udesc: udesc, id: id }).then((res) => {
            console.log(res);
            navigate('/');
        })
    }

    return (
        <div>
            <div className="create-blog content">
                <label htmlFor="title">
                    Blog Title:
                    <input type="title" name="title" defaultValue={data.utitle} onChange={(e) => {
                        setuTitle(e.target.value);
                    }} />
                </label>
                <label htmlFor="snippet">
                    Blog Snippet:
                    <input type="snippet" name="snippet" defaultValue={data.usnippet} onChange={(e) => {
                        setuSnippet(e.target.value);
                    }} />
                </label>
                <label htmlFor="body">
                    Blog Description:
                    <textarea id="body" name="body" defaultValue={data.ubody} required onChange={(e) => { setuDesc(e.target.value) }}></textarea>
                </label>
                <button onClick={updatedata}>Update</button>
            </div>
        </div>
    )
}

export default Update