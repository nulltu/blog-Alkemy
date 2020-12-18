  
import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'
import axios from 'axios'

function Post(props) {

    const removePost = async() => {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${props.post.id}`)
        if(response.status === 200){
            alert('Post removed successfully')
        }
    } 

    return (
        <>
            <TableRow key={props.post.id}>
                <TableCell component="th" scope="row">
                    {props.post.id}
                </TableCell>
                <TableCell component="th" scope="row">
                    {props.post.title}
                </TableCell>
                <TableCell>
                    {/* <Link to={`/detail/${props.post.id}`}>Detail</Link> */}
                    {/* <Link to={`/modal/${props.post.id}`}>Modal</Link> */}
                    <Modal id={props.post.id}/>
                    <Link to={`/editPost/${props.post.id}`}><button>Edit</button></Link>
                    <Link><button onClick={removePost}>Remove</button> </Link>
                </TableCell>
            </TableRow>
        </>
    )
}

export default Post