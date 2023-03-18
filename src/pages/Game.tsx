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
import { useState, useMemo } from "react";

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
  const [open, setOpen] = useState<number[]>([]);
  const gameBoard = useMemo(() => initBoard.sort(() => Math.random() - 0.5), []);

  if (open[open.length - 1] !== open[open.length - 2]) {
    console.log("다름");
  } else {
    console.log("같음");
  };

  return (
    <>
      <Title>짝 맞추기 게임</Title>
      {open}
      <Board>
        {gameBoard.map((element, index) => (
          <Card key={index} number={element} image={images[element]} open={open} setOpen={setOpen}/>
        ))}
      </Board>
    </>
  )
};

export default Game;