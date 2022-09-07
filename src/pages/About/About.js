import { Link } from 'react-router-dom'
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.about}>
      <h2>About the Mini <span>Blog</span></h2>
      <p>
        This project was created using React in the Front-End and Firebase in the Back-End.</p>
      <Link to="/posts/create" className='btn'>
        Create post
      </Link>
    </div>
  )
}

export default About