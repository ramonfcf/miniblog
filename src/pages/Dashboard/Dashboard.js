import styles from "./Dashboard.module.css"
import { Link } from "react-router-dom"
import { useAuthValue } from "../../context/AuthContext"
import { useFetchDocuments } from "../../hooks/useFetchDocuments"


const Dashboard = () => {
   const { user } = useAuthValue()
   const uid = user.uid
   const posts = []

   return (
      <div>
         <h2>Dashboard</h2>
         <p>Manage your posts</p>
         {posts && posts.length === 0 ? (
            <div className={styles.noposts}>
               <p>You have no posts yet</p>
               <Link to="/posts/create" className="btn">Create a post</Link>
            </div>
         ) : (
            <div>
               <p>Here are your posts</p>
            </div>
         )
         }
      </div>
   )
}
export default Dashboard