import styled from 'styled-components'
import img from '../assets/bg.jpg'

const StartPageDiv = styled.div`
    height: 100vh;
    display: flex;

    div {
      flex: 1;
    }

    div:first-of-type {
      background:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img});
      background-size: 190% 150%;
      background-position: left bottom;
      padding: 10rem;
    }

    div + div {
      padding: 10rem;
      box-shadow: 0 0 40px #000;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;

      h1 {
        margin-bottom: 80px;
        font-size: 5rem;
        color: #a58f7e;
      }
    }
`

export default StartPageDiv