import React from "react";

const LoginView = ({onSubmit}) => {
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <label>
          Email
          <input type="email" placeholder="Ingresa tu email"/>
        </label>
        <label>
          Email
          <input type="password" placeholder="Ingresa tu password"/>
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}

export default LoginView  