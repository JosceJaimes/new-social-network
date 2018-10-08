import React from "react";

const SignUpView = ({onSubmit}) => {
  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={onSubmit}>
        <label>
          Email
          <input type="email" name="email" placeholder="Ingrese su correo"/>
        </label>
        <label>
          Password
          <input type="password" name="password" placeholder="Ingrese su contraseña"/>
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpView;