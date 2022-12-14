import style from "./Register.module.css"
import { useState, UseEffect, useEffect } from "react"
import { useAuthentication } from "../../hooks/useAuthentication"


const Register = () => {
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const { createUser, error: authError, loading } = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    const user = {
      displayName,
      email,
      password
    }

    if (password !== confirmPassword) {
      setError("Passwords should be the same")
      return
    }

    const res = await createUser(user)

    console.log(user)
  }

  useEffect(() => {
    if (authError) setError(authError)
  }, [authError])

  return (
    <div className={style.register}>
      <h1>Sign in</h1>
      <p>Sign in and share your stories</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input type="text" name="displayName" required placeholder="User Name" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
        </label>

        <label>
          <span>Email:</span>
          <input type="email" name="email" required placeholder="User e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <span>Password:</span>
          <input type="password" name="password" required placeholder="User password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          <span>Password:</span>
          <input type="password" name="comfirmPassword" required placeholder="Comfirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>
        {!loading && <button className="btn test">Confirm</button>}
        {loading && <button className="btn test" disabled>Aguarde</button>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  )
}

export default Register