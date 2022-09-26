import styles from "./CreatePost.module.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthValue } from "../../context/AuthContext"
import { useInsertDocument } from "../../hooks/useInsertDocument"

const CreatePost = () => {
   const [title, setTitle] = useState('')
   const [image, setImage] = useState('')
   const [body, setBody] = useState('')
   const [tags, setTags] = useState([])
   const [formError, setFormError] = useState('')

   const { user } = useAuthValue()

   const { insertDocument, response } = useInsertDocument('posts')

   const navigate = useNavigate()

   const handleSubmit = (e) => {
      e.preventDefault()
      setFormError('')

      try {
         new URL(image)
      } catch (error) {
         setFormError('Please enter a valid image URL')
         return
      }

      const tagsArray = tags.split(/, | /).map(tag => tag.trim().toLowerCase())

      if (!title || !image || !body || !tagsArray) {
         setFormError('Please fill in all fields')
         return
      }


      if (formError) return;

      insertDocument({
         title,
         image,
         body,
         tagsArray,
         uid: user.uid,
         createdBy: user.displayName,
      })

      navigate('/')
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
            {!response.loading && <button className="btn test">Confirm</button>}
            {response.loading && <button className="btn test" disabled>Aguarde</button>}
            {response.error && <p className="error">{response.error}</p>}
            {formError && <p className="error">{formError}</p>}
         </form>
      </div>
   )
}

export default CreatePost