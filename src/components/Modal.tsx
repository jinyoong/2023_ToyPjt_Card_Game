import styled from "styled-components";

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7e7e7eb8;
  z-index: 1;
`

const Content = styled.div`
  width: 400px;
  height: 500px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  width: 100px;
  height: 2rem;
  border-radius: 5px;
  background-color: yellow;
  border-style: solid;
  font-weight: bold;
  :hover {
    cursor: pointer;
    background-color: #f5f56b;
  }
`

type PropsType = {
  initGame: () => void;
}

function Modal({ initGame }: PropsType) {
  
  return  (
    <Background>
      <Content>
        <h3>성공했습니다!</h3>
        <Button onClick={initGame}>다시하기</Button>
      </Content>
    </Background>
  )
};

export default Modal;