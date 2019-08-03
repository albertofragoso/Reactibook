import React from 'react'

import './styles/Comments.css'

const Comments = () => (
  <div className="Comments">
    <div className="card">
      <div className="Comments-cover" style={{ background: `url("https://picsum.photos/200/300?grayscale")` }}>
        <span>🌎</span>
      </div>
      <div className="card-body">
        <h6 className="card-title">hola@albertofragoso.com says: </h6>
        <p className="card-text font-weight-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque ad quod a, autem eligendi dolores asperiores et vel laborum nulla doloribus exercitationem cupiditate, porro atque. Deserunt ipsam deleniti aliquid cupiditate.</p>
        <button href="#" className="btn btn-primary mr-2">Edit</button>
        <button href="#" className="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
)

export default Comments