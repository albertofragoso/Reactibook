import React, { useState, useEffect } from 'react'
import { auth } from '../utils/firebase'
import { connect } from 'react-redux'
import { setUser, setLogin } from '../actions'
import toastr from 'toastr'

import './styles/Login.css'

const Login = props => {

  useEffect(() => {
    if(props.login) props.history.push('/timeline')
  }, [])

  const [form, setForm] = useState({ email: '', password: '' })
  const [isEmailCorrect, setIsEmailCorrect] = useState(true)
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const login = e => {
    e.preventDefault()
    const { email, password } = form

    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!regex.test(email)) setIsEmailCorrect(false)
    
    if(!password) setIsPasswordCorrect(false)

    if(!isEmailCorrect && !isPasswordCorrect) {
      auth().signInWithEmailAndPassword(email, password)
        .then(({ user }) => {
          props.setUser(user)
          props.setLogin(true)
          toastr.success('Welcome! 😎')
          props.history.push('/timeline')
        })
    } else { toastr.error('Invalid user!') }
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
          {!isEmailCorrect && <small className="text-danger">Incorrect Email</small>}
        </div>
        <div className="form-group">
          <label>Password: </label>
          <input 
            className="form-control" 
            type="password" 
            name="password" 
            onChange={handleChange}
          />
          {!isPasswordCorrect && <small className="text-danger">Incorrect Password</small>}
        </div>
        <button onClick={login} className="btn btn-primary">Login</button>
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