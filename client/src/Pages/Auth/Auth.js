import React from 'react'
import Register from './Components/Register';
import Login from './Components/Login';
import AuthDiv from '../../UI components/AuthDiv';
import {useSelector} from 'react-redux'


const Auth = () => {
  const haveAccount = useSelector(state => state.haveAccount)
  return (
    <div>
      <AuthDiv>
        <div></div>
        <div>hi</div>
        <>
          {haveAccount ? <Login /> : <Register />}
        </>
      </AuthDiv>
    </div>
  )
}

export default Auth
