import React from 'react'
import { auth } from '../utils/firebase'

import './styles/Header.css'

const Header = props => {

  const logout = () => {
    // auth().signOut()
    //   .then(() => props.history.push('/'))
    props.history.push('/')
  }

  return(
    <div className="Header">
      <div className="container-fluid d-flex justify-content-between">
        <div>
          <span className="font-weight-bold">{`< Reactibook >`}</span>
        </div>
        <div>
          <button onClick={logout} className="btn btn-danger">Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Header
