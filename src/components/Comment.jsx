import React from 'react'
import moment from 'moment'

import './styles/Comment.css'

const Comment = ({ comment }) => {
  
  const date = moment(comment.date, 'YYYYMMDD').fromNow()

  return(
    <div className="Comment mt-3">
      <div className="card">
        <div className="Comment-cover" style={{ background: `url('${comment.image}')` }}>
          <span>
            {comment.type === 'friends' && '👨‍👩‍👧‍👦'}
            {comment.type === 'public' && '🌎'}
          </span>
        </div>
        <div className="card-body">
          <h6 className="card-title">{comment.user} says: </h6>
          <p className="card-text font-weight-light">{comment.comment}</p>
          <button href="#" className="btn btn-primary mr-2">Edit</button>
          <button href="#" className="btn btn-danger">Delete</button>
        </div>
        <div className="card-footer text-muted">
          <small>{date}</small>
        </div>
      </div>
    </div>
  )
}

export default Comment