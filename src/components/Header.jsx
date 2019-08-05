import React from 'react'
import { connect } from 'react-redux'
import { setUser, setLogin } from '../actions'
import { auth } from '../utils/firebase'
import { Link } from 'react-router-dom'
import toastr from 'toastr'

import './styles/Header.css'

const Header = props => {

  const logout = () => {
    auth().signOut()
      .then(() => {
        props.setUser({})
        props.setLogin(false)
        toastr.success('Come back soon!')
      })
  }

  return (
    <div className="Header">
      <div className="container-fluid d-flex justify-content-between">
        <div>
          <span className="font-weight-bold">{`< Reactibook >`}</span>
        </div>
        {
          props.login &&
          <div>
            <Link className="btn btn-sm btn-secondary" onClick={logout} to="/">Logout</Link>
          </div>
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({ login: state.login })

const mapDispatchToProps = {
  setUser,
  setLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
