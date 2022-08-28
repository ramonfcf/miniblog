import styles from "./Register.module.css"
import { useState, UseEffect } from "react"


const Register = () => {
  return (
    <div>
      <h1>Cadastre-se para postar</h1>
      <p>Sign in and share your stories</p>
      <form>
        <label>
          <span>Nome:</span>
          <input type="text" name="displayName" required placeholder="User Name" />
        </label>

        <label>
          <span>Email:</span>
          <input type="email" name="email" required placeholder="User e-mail" />
        </label>
        <label>
          <span>Password:</span>
          <input type="password" name="password" required placeholder="User password" />
        </label>
        <label>
          <span>Password:</span>
          <input type="password" name="comfirmPassword" required placeholder="Comfirm Password" />
        </label>
        <button className="btn test">Confirm</button>
      </form>
    </div>
  )
}

export default Register