const reducer = (state, action) => {
  switch(action.type){
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      }
    case 'SET_LOGIN':
      return {
        ...state,
        login: action.payload
      }
    case 'GET_COMMENTS':
      return {
        ...state,
        comments: action.payload
      }
    case 'SET_COMMENTS':
      return {
        ...state,
        comments: action.payload
      }
    default: 
      return state
  }
}

export default reducer