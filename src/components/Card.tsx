import "../Game.css";

type IndexType = {
  id: number;
  image: string;
}

function Card({id, image}: IndexType) {
  return (
    <img
      className="Card" 
      src={image}
      alt={`${id}의 그림`}
    />
  )
};

export default Card;