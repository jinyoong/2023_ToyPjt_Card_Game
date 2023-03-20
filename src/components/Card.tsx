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
  openRef: React.RefObject<number[]>;
}

function Card({ number, image, openRef }: IndexType) {

  const [isFront, setIsFront] = useState<boolean>(false);

  function changeStatus() {
    const open = openRef.current;

    if (!open) {
      return;
    };

    if (open.includes(number)) {
      return;
    };

    open.push(number);
    setIsFront(true);

    console.log(open);

    if (open.length % 2 === 1) {
      return;
    };

    if (open[open.length - 1] !== open[open.length - 2]) {
      setTimeout(() => {
        const id1 = open.pop();
        const id2 = open.pop();

        console.log(id1, id2);
        setIsFront(false);
      }, 500);
    };
  };

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