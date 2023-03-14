import styled from "styled-components";

type IndexType = {
  id: number;
  image: string;
}

const Image = styled.img`
  width: 110px;
  height: 140px;
`

function Card({id, image}: IndexType) {

  return (
    <Image 
    src={image}
    alt={`${id}의 그림`}
    />
  )
};

export default Card;