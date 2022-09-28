import { useState } from "react";



const Edit = (props) => {
    const [blogPost, setBlogPost] = useState({ ...props.blogPost })

    const handleChange = (event) => {
        setBlogPost({ ...blogPost, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleUpdate(blogPost)
    }

    return (
        <>
        <details>
           <form onSubmit={handleSubmit}>
            <label htmlFor="image">Image Address: </label>
            <input type="text" name="image" value={blogPost.image} onChange={handleChange}/>
            <br/>
            <br/>
            <label htmlFor="artist">Artist Name: </label>
            <input type="text" className="artist" value={blogPost.artist} onChange={handleChange}/>
            <br/>
            <br/>
            <label htmlFor="description">Description: </label>
            <input type="text" name="description" value={blogPost.description} onChange={handleChange}/>
            <br/>
            <br/>
            <input type="submit"/>
           </form>
            </details>
        </>
    )
}

export default Edit