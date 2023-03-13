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

const Board = styled.div`
  width: 500px;
  height: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
`;

type BoardType = {
  id: number,
  image: string 
}

const initBoard: BoardType[] = [
  {id: 0, image: image1},
  {id: 0, image: image1},
  {id: 1, image: image2},
  {id: 1, image: image2},
  {id: 2, image: image3},
  {id: 2, image: image3},
  {id: 3, image: image4},
  {id: 3, image: image4},
  {id: 4, image: image5},
  {id: 4, image: image5},
  {id: 5, image: image6},
  {id: 5, image: image6},
  {id: 6, image: image7},
  {id: 6, image: image7},
  {id: 7, image: image8},
  {id: 7, image: image8},
];

function Game () {
  const gameBoard = initBoard.sort(() => Math.random() - 0.5);

  return (
    <>
      <div>짝 맞추기 게임</div>
      <Board>
        {gameBoard.map((element, index) => (
          <Card key={index} id={element.id} image={element.image}/>
        ))}
      </Board>
    </>
  )
};

export default Game;