import Game from './pages/Game';
import styled from "styled-components";

const Area = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

function App() {

  return (
    <Area>
      <Game />
    </Area>
  );
}

export default App;
