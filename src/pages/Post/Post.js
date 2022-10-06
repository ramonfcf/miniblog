import styles from "./Post.module.css";
import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";

const Post = () => {
   const { id } = useParams();
   const { document: post, loading, error } = useFetchDocument("posts", id);

   return (
      <div>
         {loading && <div>Loading...</div>}
         <h1>
            {post?.title}
         </h1>
         {error && <div>{error}</div>}
      </div>
   )
}

export default Post