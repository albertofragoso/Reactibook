import React from 'react'
import PostComment from '../components/PostComment'
import Comment from '../components/Comment'
import useGetComments from '../hooks'

const API = 'https://us-central1-reactibook-84a0d.cloudfunctions.net/api'

import './styles/Timeline.css'

const Timeline = () => {
  const comments = useGetComments(API).sort((a, b) => a.date < b.date ? 1 : a.date > b.date ? -1 : 0)

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
          comments.map((comment, index) => <Comment comment={comment} key={`comment-${index}`} />)
        }
      </div>
    </div>
  )
}

export default Timeline