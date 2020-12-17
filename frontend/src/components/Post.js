import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom'

function Post(props) {
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
                    <Link to={`/detail/${props.post.id}`}>Detail</Link>
                </TableCell>
            </TableRow>
        </>
    )
}

export default Post
