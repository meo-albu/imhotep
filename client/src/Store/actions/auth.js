import {loading, notLoading} from './'
import * as axios from 'axios'

export const loggedin = (user) => {
  return {
    type: 'USER_LOGGEDIN',
    payload: user
  }
}

export const loggedout = () => {
  return {
    type: 'USER_LOGGEDOUT'
  }
}

export const loadUser = () => (dispatch, getState) => {
  
  const token = getState().authReducer.token
  const config = {
    headers: {
      "Content-type": 'application/json'
    }
  }
  dispatch(loading())
  
  if(token) {
    setTimeout(() => {
      config.headers['auth-token'] = token
      axios.get('/game', config)
      .then(data => {
          dispatch(loggedin(data.data.user))
          dispatch(notLoading())
        })
      }, 1000);
  } else {
    dispatch(notLoading())
  } 
}
