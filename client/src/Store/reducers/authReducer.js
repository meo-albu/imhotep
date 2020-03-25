const initialState = {
  token: localStorage.getItem('token'),
  loggedIn: false,
  user: {}
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'USER_LOGGEDIN':
      return {
        ...state,
        token: localStorage.getItem('token'),
        loggedIn: true,
        user: action.payload
      }
    case 'USER_LOGGEDOUT':
      localStorage.removeItem('token')
      
      return {
        ...state,
        token: null,
        loggedIn: false,
        user: null
      }
    default:
      return state
  } 
}

export default authReducer