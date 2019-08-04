import React, { useEffect } from 'react'
import PostComment from '../components/PostComment'
import Comment from '../components/Comment'
import { connect } from 'react-redux'
import { getComments } from '../actions'

const API = 'https://us-central1-reactibook-84a0d.cloudfunctions.net/api'

import './styles/Timeline.css'

const Timeline = props => {
  
  useEffect(() => {
    if(!props.login) props.history.push('/')
    
    fetch(API)
      .then(response => response.json())
      .then(data => props.getComments(data))
      .catch(err => err)
  }, [])

  return(
    <div className="Timeline mx-auto mt-3 mb-5">
      <div className="Timeline-postcomment ">
        <PostComment />
      </div>
      <hr />
      <div className="Timeline-view mb-1">
        <span className="mr-2">👨‍👩‍👧‍👦</span>
        <span>🌎</span>
      </div>
      <div className="comments">
        {
          !props.comments 
           ? <p className="text-center font-weight-light">Loading...</p>
           : props.comments.sort((a, b) => a.date < b.date ? 1 : a.date > b.date ? -1 : 0).map((comment, index) => <Comment comment={comment} key={`comment-${index}`} />)
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({ comments: state.comments, login: state.login })

const mapDispatchToProps = {
  getComments,
}

export default connect(mapStateToProps, mapDispatchToProps)(Timeline)