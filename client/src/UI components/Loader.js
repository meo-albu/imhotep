import styled from 'styled-components'

const Loader = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #f1f1f1;
  z-index: 100;

  &:after {
    content: "";
    position: absolute;
    width: 120px;
    height: 120px;
    left: calc(50% - 60px);
    top: calc(50% - 60px);
    border-top: 3px solid #a58f7e;
    animation: 0.5s rotate infinite linear;
    border-radius: 50%;
  }

  @keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`

export default Loader