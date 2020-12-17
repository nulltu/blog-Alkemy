import React from 'react'
import axios from 'axios'
import { useEffect, useState} from 'react'

function Detail(props){

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
            <p>{postId.title}</p>
        </>
    )
}

export default Detail
