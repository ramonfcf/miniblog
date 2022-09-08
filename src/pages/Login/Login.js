import { useState, useEffect } from "react"
import { useAuthentication } from "../../hooks/useAuthentication"
import styles from './Login.module.css'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const { login, error: authError, loading } = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    const user = {
      email,
      password
    }

    const res = await login(user)
    console.log(user)
  }




  useEffect(() => {
    if (authError) setError(authError)
  }, [authError])


  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <p>Login to use everything you need</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email:</span>
          <input type="email" name="email" required placeholder="User e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <span>Password:</span>
          <input type="password" name="password" required placeholder="User password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        {!loading && <button className="btn test">Confirm</button>}
        {loading && <button className="btn test" disabled>Aguarde</button>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  )
}


export default Login