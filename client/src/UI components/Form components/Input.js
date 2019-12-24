import styled from 'styled-components'

const Input = styled.input`
    border: 0;
    padding: 10px;
    font-size: 16px;
    box-shadow: 0 3px 3px #eee;
    background: ${({blur}) => blur ? 'rgba(244, 40, 40, 0.11)' : 'transparent'};
    border-bottom: ${({blur}) => blur ? '1px solid red' : 0};
    display: block;
    width: auto;
    float: none;
    transition: 0.3s;
    margin-bottom: 25px;
    width: 100%;

    &:focus {
        border: 0;
        box-shadow: 0 4px 4px #eee;
        outline: 0;
    }

    &::placeholder {
        color: #ccc;
    }
`

export default Input
