import styled from "styled-components";

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

type PropsType = {
  number: number;
  image: string;
  openRef: React.RefObject<number[]>;
  checkRef: React.RefObject<boolean>;
  click: boolean;
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
}

function Card({ number, image, openRef, checkRef, click, setClick }: PropsType) {

  function changeStatus() {
    const open = openRef.current;

    if (!open) {
      return;
    };

    if (open.includes(number)) {
      return;
    }

    open.push(number);
    setClick(!click);
  };

  return (
    <Image isFront={openRef.current?.includes(number) ? true : false} onClick={() => !checkRef.current && changeStatus()}>
      <Front
        src={image}
        alt={"사진"}
      />
      <Back></Back>
    </Image>
  )
};

export default Card;