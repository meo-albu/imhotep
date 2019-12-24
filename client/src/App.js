import React from 'react';
import Register from './Pages/StartPage/Components/Register';
import StartPageDiv from './UI components/StartPageDiv';
import Login from './Pages/StartPage/Components/Login';
import {useSelector} from 'react-redux'

function App() {
  const haveAccount = useSelector(state => state.haveAccount)

  return (
    <div className="App">
      <StartPageDiv>
        <div></div>
        <>
          {haveAccount ? <Login /> : <Register />}
        </>
      </StartPageDiv>
    </div>
  );
}

export default App;
