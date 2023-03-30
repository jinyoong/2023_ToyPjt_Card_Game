import styled from "styled-components";
import Card from "../components/Card";
import Modal from "../components/Modal";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";
import { useRef, useState, useEffect, useCallback } from "react";

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

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

const initialBoard = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];

function Game () {
  const openRef = useRef(new Array(16).fill(0).map((arr, i) => i));
  const checkRef = useRef(true);
  const isSuccessRef = useRef(false);
  const [initRender, setInitRender] = useState(true);
  const [click, setClick] = useState(true);
  const [gameBoard, setGameBoard] = useState<number[]>([]);
  
  const initGame = useCallback(() => {
    setGameBoard(initialBoard.sort(() => Math.random() - 0.5));
    setInitRender(true);
    
    let timer: ReturnType<typeof setTimeout> | undefined = undefined;
    isSuccessRef.current = false;
    openRef.current = new Array(16).fill(0).map((arr, i) => i);
    checkRef.current = true;

    if (timer) {
      clearTimeout(timer);
    };

    timer = setTimeout(() => {
      openRef.current = [];
      checkRef.current = false;
      setInitRender(false);
    }, 2000)

  }, []);
  
  function checkCard() {
    const open = openRef.current;

    if (open.length === gameBoard.length) {
      isSuccessRef.current = true;
    };
  
    if (open.length % 2) {
      return;
    };

    const current = gameBoard[open[open.length - 1]];
    const before = gameBoard[open[open.length - 2]];

    if (checkRef.current === true) {
      return;
    };
  
    if (current !== before) {
      checkRef.current = true;
  
      setTimeout(() => {
        open.pop();
        open.pop();
        setClick(!click);
        checkRef.current = false;
      }, 500)
    };
  };

  if (!initRender) {
    checkCard();
  }

  useEffect(() => {
    initGame();
  }, [initGame])

  return (
    <>
      {isSuccessRef.current ? 
      <Modal
        initGame={initGame}
      /> : <></>}
      <Title>짝 맞추기 게임</Title>
      <Board>
        {gameBoard.map((element, index) => (
          <Card 
            key={index}
            number={index}
            image={images[element]}
            openRef={openRef}
            checkRef={checkRef}
            click={click}
            setClick={setClick}
          />
        ))}
      </Board>
    </>
  )
};

export default Game;