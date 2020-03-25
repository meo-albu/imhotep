import styled from 'styled-components'

const Error = styled.span`
    color: red;
    font-size: 10px;
    transition: 3s;
    margin-bottom: ${({special}) => special ? '10px' : '25px'};
    display: block;
    padding: ${({special}) => special ? '10px' : 0};
    background: ${({special}) => special ? 'rgba(255, 0, 0, 0.1)' : 'none'};
    border: ${({special}) => special ? '1px solid rgba(255, 0, 0, 0.3)' : 0};
`

export default Error
