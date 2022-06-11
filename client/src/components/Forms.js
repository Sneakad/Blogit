import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/forms.css'
import axios from 'axios'

function Forms() {

    const [title, setTitle] = useState("");
    const [snippet, setSnippet] = useState("");
    const [desc, setDesc] = useState("");

    const navigate = useNavigate();
    const addData = () => {
        axios.post('https://blogit96.herokuapp.com/insert', { title: title, snippet: snippet, desc: desc })
        navigate("/");
    }


    return (
        <div>
            <div className="create-blog content">
                <form >
                    <label htmlFor="title">
                        Blog Title:
                        <input type="title" name="title" onChange={(e) => {
                            setTitle(e.target.value);
                        }} />
                    </label>
                    <label htmlFor="snippet">
                        Blog Snippet:
                        <input type="snippet" name="snippet" onChange={(e) => {
                            setSnippet(e.target.value);
                        }} />
                    </label>
                    <label htmlFor="body">
                        Blog Description:
                        <textarea id="body" name="body" required onChange={(e) => { setDesc(e.target.value) }}></textarea>
                    </label>
                    <button onClick={addData}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Forms