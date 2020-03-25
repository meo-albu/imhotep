const loadingReducer = (state = false, action) => {
  switch(action.type) {
    case 'IS_LOADING':
      return state = true;
    case 'IS_NOT_LOADING':
      return state = false;
    default:
      return state
  } 
}

export default loadingReducer