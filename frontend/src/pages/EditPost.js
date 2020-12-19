import React from 'react'
import FormEditPost from '../components/formEditPost/formEditPost'

function EditPost(props) {
    
    return (
        <div>
           <FormEditPost paramsId = {props.match.params.id}/>
        </div>
    )
}
export default EditPost
