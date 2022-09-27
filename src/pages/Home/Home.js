import styles from './Home.module.css'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

const Home = () => {
  const [query, setQuery] = useState('')
  const [posts] = useState([])

  const handleSubtmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.home}>
      <h1>Here you can see the last users posts</h1>
      <form onSubmit={handleSubtmit} className={styles.search_form}>
        <input type="text" placeholder='search for tags...' onChange={(e) => setQuery(e.target.value)} />
        <button className="btn btn-dark">Search</button>
      </form>

      <div>
        <h2>Posts</h2>
        {posts && posts.length === 0 && (
          <div className={styles.noPosts}>
            <h3>No posts yet</h3>
            <Link to='/posts/create' className='btn'>Create one</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home