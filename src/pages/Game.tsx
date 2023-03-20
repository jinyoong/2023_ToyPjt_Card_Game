import styled from "styled-components";
import Card from "../components/Card";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";
import { useMemo, useRef } from "react";

const Title = styled.div`
  font-weight: bold;
  font-size: 2rem;
`

const Board = styled.div`
  width: 500px;
  height: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
`;

const images: string[] = [image1, image2, image3, image4, image5, image6, image7, image8];

const initBoard: number[] = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];

function Game () {
  const openRef = useRef<number[]>([]);
  const gameBoard = useMemo(() => initBoard.sort(() => Math.random() - 0.5), []);

  console.log(checkOpen());

  function checkOpen(): null | string {
    const open = openRef.current;
    const last = open.length - 1;

    if (open.length === 0 || open.length % 2 === 1) {
      return null;
    };

    console.log("체크오픈 함수 실행")
    if (open[last] === open[last - 1]) {
      return "같음";
    } else {
      return "다름";
    };
  };

  return (
    <>
      <Title>짝 맞추기 게임</Title>
      <Board>
        {gameBoard.map((element, index) => (
          <Card key={index} number={element} image={images[element]} openRef={openRef} />
        ))}
      </Board>
    </>
  )
};

export default Game;