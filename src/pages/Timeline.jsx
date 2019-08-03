import React from 'react'
import PostComment from '../components/PostComment'
import Comments from '../components/Comments'

import './styles/Timeline.css'

const Timeline = () => (
  <div className="Timeline mx-auto mt-5 mb-5">
    <div className="Timeline-postcomment ">
      <PostComment />
    </div>
    <div className="Timeline-view mb-1">
      <span className="mr-2">👨‍👩‍👧‍👦</span>
      <span>🌎</span>
    </div>
    <div className="comments">
      <Comments />
    </div>
  </div>
)

export default Timeline