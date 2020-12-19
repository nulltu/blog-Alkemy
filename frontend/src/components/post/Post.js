  
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import edit from '../../assets/icons/pencil.svg';
import remove from '../../assets/icons/delete.svg';

import React from 'react';
import { Link } from 'react-router-dom'
import Modal from '../Modal/Modal'
import axios from 'axios'
import './post.css'



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
                <TableCell className="links__crud">
                    <Modal id={props.post.id}/>
                    <Link to={`/editPost/${props.post.id}`}><img src={edit} alt=""/></Link>
                    <Link><img src={remove} onClick={removePost} alt=""/></Link>
                </TableCell>
            </TableRow>
        </>
    )
}

export default Post