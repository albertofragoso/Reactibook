import React, { useState } from 'react'
import { auth } from '../utils/firebase'

import './styles/Login.css'

const Login = props => {

  const [form, setForm] = useState({ email: '', password: '', errorEmail: null, errorPassword: null })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const login = e => {
    e.preventDefault()
    const { email, password, errorEmail, errorPassword } = form

    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    !regex.test(email) ? setForm({ ...form, errorEmail: 'Invalid email format!' }) : setForm({ ...form, errorEmail: null })
    
    !password ? setForm({ ...form, errorPassword: 'Password is required!' }) : setForm({ ...form, errorPassword: null })

    if(!errorEmail && !errorPassword) {
      auth().signInWithEmailAndPassword(email, password)
        .then(({ user }) => {
          console.log(user)
          props.history.push('/timeline')
        })
        .catch(err => console.log(err))
    } else { console.log(form) }
  }

  return (
    <div className="Login">
      <div className="Login-form mx-auto mt-5" >
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
      </div>
    </div>
  )
}

export default Login