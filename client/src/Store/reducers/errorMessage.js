const errorMessage = (state = {state: false, message: ''}, action) => {
  switch(action.type) {
    case 'ISERROR':
      return state = {
        state: true,
        message: action.message
      }
    case 'NOTERROR':
      return state = {
        state: false,
        message: action.message
      }
    default:
      return state
  } 
}

export default errorMessage