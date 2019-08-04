import React, { useState } from 'react'
import { auth } from '../utils/firebase'

const Login = () => {

  const [form, setForm] = useState({ email: '', password: '', errorEmail: null, errorPassword: null })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const login = e => {
    e.preventDefault()
    const { email, password, errorEmail, errorPassword } = form

    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    !regex.test(email) ? setForm({ ...form, errorEmail: 'Invalid email format!' }) : setForm({ ...form, errorEmail: null })
    
    !password ? setForm({ ...form, errorPassword: 'Password is required!' }) : setForm({ ...form, errorPassword: null })

    if(errorEmail && errorPassword) {
      auth().signInWithEmailAndPassword(email, password)
        .then(({ user }) => console.log(user))
        .catch(err => console.log(err))
    } else { console.log(form) }
  }

  // const logout = () => {
  //   auth.signOut()
  // .then(() => console.log('Log out'))
  // }

  // const signup = e => {
  //   e.preventDefault()
  //   const { email, password } = form
  //   auth().createUserWithEmailAndPassword(email, password)
  //     .then(({ user }) => console.log(user))
  //     .catch(err => console.log(err))
  // }

  return(
    <form>
      <div className="form-group">
        <label>Email: </label>
        <input 
          className="form-control"
          type="email" 
          name="email"
          onChange={handleChange} 
        />
        {form.errorEmail && <small className="text-danger">{form.errorEmail}</small>}
      </div>

      <div className="form-group">
        <label>Password: </label>
        <input 
          className="form-control" 
          type="password" 
          name="password" 
          onChange={handleChange}
        />
        {form.errorPassword && <small className="text-danger">{form.errorPassword}</small>}
      </div>
      <button onClick={login} className="btn btn-primary">Login</button>
    </form>
  )
}

export default Login