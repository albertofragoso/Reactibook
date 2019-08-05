import React, { useState } from 'react'
import { auth } from '../utils/firebase'
import { connect } from 'react-redux'
import { setUser, setLogin } from '../actions'
import toastr from 'toastr'

import './styles/Login.css'

const Login = props => {

  const [form, setForm] = useState({ email: '', password: '' })
  const [isEmailCorrect, setIsEmailCorrect] = useState(true)
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true)
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
    regex.test(form.email) ? setIsEmailCorrect(true) : setIsEmailCorrect(false)
  }

  const handleLogin = e => {
    e.preventDefault()
    const { email, password } = form
    
    password ? setIsPasswordCorrect(true) : setIsPasswordCorrect(false)

    if(!isEmailCorrect || !isPasswordCorrect) return

    auth().signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        props.setUser(user)
        props.setLogin(true)
        toastr.success('Welcome! 😎')
        props.history.push('/timeline')
      })
      .catch(() => {
        toastr.error('Invalid user!')
      })
      e.target.reset()
  }

  return (
    <div className="Login">
      <div className="Login-form mx-auto mt-5" >
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>📬 Email: </label>
          <input 
            className="form-control"
            type="text" 
            name="email"
            onChange={handleChange} 
          />
          {!isEmailCorrect && <small className="text-danger">Incorrect Email</small>}
        </div>
        <div className="form-group">
          <label>🔑 Password: </label>
          <input 
            className="form-control" 
            type="password" 
            name="password" 
            onChange={handleChange}
          />
          {!isPasswordCorrect && <small className="text-danger">Incorrect Password</small>}
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({ login: state.login })

const mapDispatchToProps = {
  setUser,
  setLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)