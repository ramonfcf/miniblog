import styles from "./EditPost.module.css"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useAuthValue } from "../../context/AuthContext"
import { useInsertDocument } from "../../hooks/useInsertDocument"
import { useFetchDocument } from "../../hooks/useFetchDocument"

const EditPost = () => {
   const { id } = useParams()
   const { document: post } = useFetchDocument('posts', id)

   const [title, setTitle] = useState('')
   const [image, setImage] = useState('')
   const [body, setBody] = useState('')
   const [tags, setTags] = useState([])
   const [formError, setFormError] = useState('')

   useEffect(() => {
      if (post) {
         setTitle(post.title)
         setImage(post.image)
         setBody(post.body)

         const tags = post.tagsArray.join(', ')
         setTags(tags)
      }
   }, [post])

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
      <div className={styles.edit_post}>
         {post && (
            <>
               <h2>Edit Post: {post.title} </h2>
               <p>Change the fields you want to edit</p>
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
                  <p className={styles.preview_title}> Image Preview: </p>
                  <img className={styles.image_preview} src={post.image} alt={post.title} />
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
                  {!response.loading && <button className="btn test">Edit</button>}
                  {response.loading && <button className="btn test" disabled>Wait...</button>}
                  {response.error && <p className="error">{response.error}</p>}
                  {formError && <p className="error">{formError}</p>}
               </form>
            </>
         )}
      </div>
   )
}

export default EditPost