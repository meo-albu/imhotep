import styled from 'styled-components'

const Submit = styled.button`
    border: 0;
    padding: 10px;
    display: block;
    font-size: 16px;
    background: #C1AE9F;
    color: #fff;
    width: 100%;
    transition: 0.2s;
    border-radius: 10px;

    &:hover {
      background: #a58f7e;
      cursor: pointer;
    }

    &:disabled {
      background: #ccc;
      pointer-events: none;
    }
`

export default Submit
