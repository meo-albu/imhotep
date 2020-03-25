import React, {useEffect} from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom'
import { Route } from 'react-router'

import Auth from './Pages/Auth/Auth'
import StartPage from './Pages/StartPage/StartPage'
import Loader from './UI components/Loader'

import {useSelector, useDispatch} from 'react-redux'
import {loadUser} from './Store/actions/auth'

function App() {
  const loggedIn = useSelector(state => state.authReducer.loggedIn)
  const loadingState = useSelector(state => state.loadingReducer)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])

  return (
    <div className="App">
      <>
        {loadingState && <Loader />}
        <Router>
            {loggedIn ?
              <>
              <Route path="/game" component={StartPage} />
              <Redirect to="/game"/>
              </>
              : 
              <>
              <Route exact path="/" component={Auth} />
                <Redirect to="/"/>
              </>
            }
        </Router>
      </>
    </div>
  );
}

export default App;
