import { useState, useEffect } from 'react'

const useGetComments = url => {
  const [comments, setComments] = useState([])
  
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(err => err)
  }, [])

  return comments
}

export default useGetComments
