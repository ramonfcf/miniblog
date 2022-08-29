import style from "./Register.module.css"
import { useState, UseEffect } from "react"


const Register = () => {
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
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

    console.log(user)
  }

  return (
    <div className={style.register}>
      <h1>Cadastre-se para postar</h1>
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
        <button className="btn test">Confirm</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  )
}

export default Register