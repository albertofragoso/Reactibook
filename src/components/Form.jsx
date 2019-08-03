import React from 'react'

const Form = () => (
  <form>
    <div className="form-group">
      <label>Email: </label>
      <input 
        className="form-control" 
        type="email" 
        name="email"
      />
    </div>

    <div className="form-group">
      <label>Password: </label>
      <input 
        className="form-control" 
        type="password" 
        name="password" 
      />
    </div>
    <button className="btn btn-primary">Login</button>
  </form>
)

export default Form