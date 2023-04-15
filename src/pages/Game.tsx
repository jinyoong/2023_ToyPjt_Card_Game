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
  const isCheckingRef = useRef(true);
  const isModalOepnRef = useRef(false);
  const clickCountRef = useRef(0);
  const [selected, setSelected] = useState(new Array(16).fill(0).map((ele, idx) => idx));
  const [initRender, setInitRender] = useState(true);
  const [gameBoard, setGameBoard] = useState<number[]>([]);
  
  const initGame = useCallback(() => {
    setSelected(new Array(16).fill(0).map((ele, idx) => idx));
    setInitRender(true);
    setGameBoard(initialBoard.sort(() => Math.random() - 0.5));
    
    let timer: ReturnType<typeof setTimeout> | undefined = undefined;
    isModalOepnRef.current = false;
    isCheckingRef.current = true;
    clickCountRef.current = 0;

    if (timer) {
      clearTimeout(timer);
    };

    timer = setTimeout(() => {
      isCheckingRef.current = false;
      setSelected([]);
      setInitRender(false);
    }, 2000)

  }, []);

  const selectCard = (cardIdx: number): void => {
    const isChecking = isCheckingRef.current;

    if (isChecking) {
      return;
    };

    if (selected.includes(cardIdx)) {
      return;
    };

    setSelected([...selected, cardIdx]);
    clickCountRef.current += 1;
  };
  
  const checkCard = () => {
    if (initRender) {
      return;
    };

    if (selected.length === gameBoard.length) {
      isModalOepnRef.current = true;
    };
  
    if (selected.length % 2) {
      return;
    };

    const current = gameBoard[selected[selected.length - 1]];
    const before = gameBoard[selected[selected.length - 2]];

    if (isCheckingRef.current === true) {
      return;
    };
  
    if (current !== before) {
      isCheckingRef.current = true;
  
      setTimeout(() => {
        setSelected([...selected.slice(0, -2)]);
        isCheckingRef.current = false;
      }, 500)
    };
  };

  checkCard();

  useEffect(() => {
    initGame();
  }, [initGame])

  return (
    <>
      {isModalOepnRef.current ? 
      <Modal
        initGame={initGame}
        clickCount={clickCountRef.current}
      /> : <></>}
      <Title>짝 맞추기 게임</Title>
      클릭한 횟수 : {clickCountRef.current} 회
      <Board>
        {gameBoard.map((element, index) => (
          <Card 
            key={index}
            number={index}
            image={images[element]}
            selected={selected}
            selectCard={selectCard}
          />
        ))}
      </Board>
    </>
  )
};

export default Game;