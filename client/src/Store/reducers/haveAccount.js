const haveAccount = (state = false, action) => {
  switch(action.type) {
    case 'LOGIN':
      return state = true;
    case 'REGISTER':
      return state = false;
    default:
      return state
  } 
}

export default haveAccount