import styled from 'styled-components'

const UserInfo = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  overflow: hidden;

  div {
    padding: 30px;

    h2, p {
      margin-bottom: 10px;
    }
  }

  div:first-of-type {
    background: #a58f7e;
    color: #fff;
  }
`

export default UserInfo