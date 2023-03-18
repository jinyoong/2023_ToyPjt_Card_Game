import styled from "styled-components";
import { useState } from "react";

const Image = styled.div<{ isFront: boolean }>`
  position: relative;
  width: 110px;
  height: 140px;
  transition: 0.6s;
  transform-style: preserve-3d;
  transform: ${props => (props.isFront ? "rotateY(180deg)" : "")};
`

const Front = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #fdb82f;
  :hover {
    cursor: pointer;
  }
`

type IndexType = {
  number: number;
  image: string;
  open: number[];
  setOpen: React.Dispatch<React.SetStateAction<number[]>>;
}

function Card({ number, image, open, setOpen }: IndexType) {

  const [isFront, setIsFront] = useState<boolean>(false);

  function changeStatus() {
    setIsFront(true);
    setOpen([...open, number])
  }

  return (
    <Image isFront={isFront} onClick={() => !isFront && changeStatus()}>
      <Front
        src={image}
        alt={"사진"}
      />
      <Back></Back>
    </Image>
  )
};

export default Card;