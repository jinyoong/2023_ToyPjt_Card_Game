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
  width: 60%;
  height: 60%;
  background-color: white;
  border-radius: 15px;
`

type PropsType = {
  restart: boolean;
  setRestart: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({ restart, setRestart }: PropsType) {
  
  function clickEvent() {
    setRestart(!restart);
  }

  return  (
    <Background>
      <Content>
        성공했습니다!
        <button onClick={() => clickEvent()}>다시하기</button>
      </Content>
    </Background>
  )
};

export default Modal;