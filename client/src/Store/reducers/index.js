import haveAccount  from './haveAccount'
import errorMessage from './errorMessage'
import authReducer from './authReducer'
import loadingReducer from './loadingReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
  haveAccount,
  errorMessage,
  authReducer,
  loadingReducer
})

export default allReducers