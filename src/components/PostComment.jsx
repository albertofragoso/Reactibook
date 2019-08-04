import React from 'react'

const Postcomment = () => (
  <form>
    <div className="form-group">
      <label>What's happening?</label>
      <textarea className="form-control" name="comment" rows="3"></textarea>
    </div>
    <div className="form-group">
      <select className="form-control" name="type">
        <option value="">Who want to share your post with?</option>
        <option value="friends">👨‍👩‍👧‍👦 Friends</option>
        <option value="public">🌎 Public</option>
      </select>
    </div>
    <div className="custom-file mb-3">
      <input type="file" className="custom-file-input" name="photo" />
      <label className="custom-file-label" htmlFor="customFile">📸 Image</label>
    </div>
    <div className="text-right">
      <button className="btn btn-primary">Share</button>
    </div>
  </form>
)

export default Postcomment