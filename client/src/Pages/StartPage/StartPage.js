import React from 'react'
import {Link} from 'react-router-dom'
import {loggedout} from '../../Store/actions'
import {useSelector, useDispatch} from 'react-redux'
import Header from '../../UI components/Header/Header'
import LogoutButton from '../../UI components/Header/LogoutButton'

const StartPage = () => {
  const user = useSelector(state => state.authReducer.user)
  const dispatch = useDispatch()

  return (
    <div>
      <Header >
        <h1>IMHOTEP</h1>

        <Link to="/">
          <LogoutButton onClick={() => dispatch(loggedout())}>Logout</LogoutButton>
        </Link>
      </Header>

      <p>name, {user.name}</p>
      <p>email: {user.email}</p>

    </div>
  )
}

export default StartPage