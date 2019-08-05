import React, { useState }  from 'react'
import { database } from '../utils/firebase'
import { connect } from 'react-redux'
import { setComments } from '../actions'
// import Modal from '../components/Modal'
import moment from 'moment'
import toastr from 'toastr'

import './styles/Comment.css'

const Comment = props => {

  const [isEditing, setIsEditing] = useState(false)
  // const [modal, setModal] = useState(false)

  // const showModal = () => setModal(!modal)

  const handleEdit = () => setIsEditing(true)

  const handleCancel = () => setIsEditing(false)

  const handleSubmit = e => {
    e.preventDefault()
    const form = new FormData(e.target)
    const data = {
      'id': props.comment.id,
      'comment': form.get('newcomment'),
      'date': props.comment.date,
      'image': props.comment.image,
      'type': props.comment.type,
      'user': props.comment.user,
    }

    database.ref('comments/'+props.comment.id).set(data)
      .then(() => toastr.success('Nice! Your comment has been updated.'))
      .catch(() => toastr.error('Something went wrong'))

    const updatedComments = props.comments.filter(comment => comment.id !== data.id)
    props.setComments([...updatedComments, data])
    setIsEditing(false)
  }

  const handleDelete = e => {
    e.preventDefault()

    database.ref('comments/'+props.comment.id).remove()
      .then(() => toastr.error('Your comment has been deleted.'))
      .catch(() => toastr.error('Something went wrong'))

    const updatedComments = props.comments.filter(comment => comment.id !== props.comment.id)
    props.setComments([...updatedComments])
  }
  
  const date = moment(props.comment.date).fromNow()

  return(
    <div className="Comment mt-3">
      {
        !isEditing 
        ? <div className="card">
            <div className="Comment-cover" style={{ background: `url('${props.comment.image}')` }}>
              <span>
                {props.comment.type === 'friends' && '👨‍👩‍👧‍👦'}
                {props.comment.type === 'public' && '🌎'}
              </span>
            </div>
            <div className="card-body">
              <h6 className="card-title">{props.comment.user} says: </h6>
              <p className="card-text font-weight-light">{props.comment.comment}</p>
              {
                props.user.email === props.comment.user && 
                <div>
                  <button onClick={handleEdit} className="btn btn-secondary mr-2">Edit</button>
                  <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </div> 
              }
            </div>
            <div className="card-footer text-muted">
              <small>{date}</small>
            </div>
          </div>
      : <form onSubmit={handleSubmit}>
          <div className="Comment-cover mb-2" style={{ background: `url('${props.comment.image}')` }}>
            <span>
              {props.comment.type === 'friends' && '👨‍👩‍👧‍👦'}
              {props.comment.type === 'public' && '🌎'}
            </span>
          </div>
          <div className="form-group">
            <textarea className="form-control" name="newcomment" rows="3" defaultValue={props.comment.comment} required></textarea>
          </div>
          <button className="btn btn-secondary mr-2">Update</button>
          <button onClick={handleCancel} className="btn btn-danger">Cancel</button>
        </form>
    }
    {/* <Modal show={modal} close={showModal}>
        <h1>Are you sure want to delete this comment?</h1>
        <button className="btn btn-danger">Delete</button>
    </Modal> */}
    </div>
  )
}

const mapStateToProps = state => ({ user: state.user, comments: state.comments })

const mapDispatchToProps = {
  setComments,
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)