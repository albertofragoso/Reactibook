import React from 'react'
import { connect } from 'react-redux'
import { auth } from '../utils/firebase'

import './styles/Header.css'

const Header = props => {

  const logout = () => {
    auth().signOut()
      .then(() => props.history.push('/'))
  }

  return(
    <div className="Header">
      <div className="container-fluid d-flex justify-content-between">
        <div>
          {/* <Link to="/"> */}
            <span className="font-weight-bold">{`< Reactibook >`}</span>
          {/* </Link> */}
        </div>
        {
          props.login &&
          <div>
            <button onClick={logout} className="btn btn-sm btn-secondary">Logout</button>
          </div>
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({ login: state.login })

export default connect(mapStateToProps)(Header)
