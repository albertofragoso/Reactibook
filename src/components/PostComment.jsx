import React, { useState } from 'react'
import { storage, database } from '../utils/firebase'
import { connect } from 'react-redux'
import toastr from 'toastr'

const Postcomment = props => {

  const [commentPhoto, setCommentPhoto] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    const form = new FormData(e.target)
    const newDate = new Date().toISOString()

    const data = {
      'comment': form.get('comment'),
      'date': newDate,
      'image': commentPhoto,
      'type': form.get('type'),
      'user': props.user.email
    }

    database.ref('comments').push(data)
      .then(() => toastr.success('Nice! Your comment has been published'))
      .catch(() => toastr.error('Something went wrong'))

    e.target.reset()
  }

  const handleChange = e => {
    const file = e.target.files[0]
    const storageRef = storage.ref()
    const name = (+new Date()) + '-' + file.name
    const uploadFile = storageRef.child(name).put(file)

    uploadFile
      .then(snapshot => {
        snapshot.ref.getDownloadURL()
          .then(getDownloadURL => setCommentPhoto(getDownloadURL))
      })
  }

  return(
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>What's happening?</label>
        <textarea className="form-control" name="comment" rows="3" required></textarea>
      </div>
      <div className="form-group">
        <select className="form-control" name="type" required>
          <option value="">Who want to share your post with?</option>
          <option value="friends">👨‍👩‍👧‍👦 Friends</option>
          <option value="public">🌎 Public</option>
        </select>
      </div>
      <div className="custom-file mb-3">
        <input type="file" className="custom-file-input" name="image" onChange={handleChange} required/>
        <label className="custom-file-label" htmlFor="customFile">📸 Image</label>
      </div>
      <div className="text-right">
        <button className="btn btn-primary">Share</button>
      </div>
    </form>
  )
}

const mapStateToProps = state => ({ user: state.user })

export default connect(mapStateToProps)(Postcomment)