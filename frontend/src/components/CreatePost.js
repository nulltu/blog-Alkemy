import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import '../styles/createPost.css'

function CreatePost() {

    const [dataPost, setDataPost] = useState({
        username: '', title: '', body: ''
    })

    const readInput = e => {
        const textBox = e.target.name
        const value = e.target.value
        setDataPost({
            ...dataPost,
            [textBox]: value
        })
    }

    const sendData = async (e) => {
        e.preventDefault();
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', dataPost)
        console.log(response)
    }

    return (
        <div className="form__create__post">
            <TextField id="standard-basic" label="Username" name="username" onChange={readInput} />
            <TextField id="standard-basic" label="Title" name="title" onChange={readInput} />
            <TextField id="standard-basic" label="Body" name="body" onChange={readInput} />
            <div><Button onClick={sendData}>Send</Button></div>
        </div>
    );
}



export default CreatePost
