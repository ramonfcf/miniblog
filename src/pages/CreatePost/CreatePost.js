import styles from "./CreatePost.module.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthValue } from "../../context/AuthContext"

const CreatePost = () => {
   const [title, setTitle] = useState('')
   const [image, setImage] = useState('')
   const [body, setBody] = useState('')
   const [tags, setTags] = useState([])
   const [formError, setFormError] = useState('')



   const handleSubmit = (e) => {
      e.preventDefault()
   }

   return (
      <div className={styles.create_post}>
         <h2>Create Post</h2>
         <p>Write about what you want and share your feelings</p>
         <form onSubmit={handleSubmit}>
            <label>
               <span>Title</span>
               <input
                  type="text"
                  name="title"
                  required
                  placeholder="Think about a good title..."
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
               />
            </label>
            <label>
               <span>Image URL:</span>
               <input
                  type="text"
                  name="image"
                  required
                  placeholder="Add a image to illustrate your thoughts"
                  onChange={(e) => setImage(e.target.value)}
                  value={image}
               />
            </label>
            <label>
               <span>Content</span>
               <textarea
                  name="body"
                  required
                  placeholder="Write about your post"
                  onChange={(e) => setBody(e.target.value)}
                  value={body}
               />
            </label>
            <label>
               <span>Tags:</span>
               <input
                  type="text"
                  name="tags"
                  required
                  placeholder="Insert tags separated by comma"
                  onChange={(e) => setTags(e.target.value)}
                  value={tags}
               />
            </label>
            <button className="btn">Aguarde</button>
            {/* {!loading && <button className="btn test">Confirm</button>}
            {loading && <button className="btn test" disabled>Aguarde</button>}
            {error && <p className="error">{error}</p>} */}
         </form>
      </div>
   )
}

export default CreatePost