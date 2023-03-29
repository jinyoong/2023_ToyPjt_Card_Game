import Game from './pages/Game';
import styled from "styled-components";

const Area = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`

function App() {

  return (
    <Area>
      <Game />
    </Area>
  );
}

export default App;
