import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Detail(props) {

    const [postId, setPostId] = useState()

    const id = props.match.params.id

    useEffect(() => {
        getPostId()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getPostId = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const dataPost = await response.data
        setPostId(dataPost)
    }

    return (
        <>
            {postId === undefined
                ? null
                : <Card >
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {postId.title}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {postId.body}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Edit</Button>
                        <Button size="small">Remove</Button>
                    </CardActions>
                </Card>}
        </>
    )
}

export default Detail;