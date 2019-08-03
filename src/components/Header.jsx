import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Header.css'

const Header = () => (
  <div className="Header">
    <div className="container-fluid">
        <span className="font-weight-bold">{`< Reactibook >`}</span>
    </div>
  </div>
)

export default Header
