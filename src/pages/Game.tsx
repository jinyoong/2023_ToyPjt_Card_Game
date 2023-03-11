import "../Game.css";
import Card from "../components/Card";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";

type BoardType = {
  id: number,
  image: string 
}

function Game () {
  const gameBoard: BoardType[] = [
    {id: 0, image: image1},
    {id: 0, image: image1},
    {id: 1, image: image2},
    {id: 1, image: image2},
    {id: 2, image: image3},
    {id: 2, image: image3},
    {id: 3, image: image1},
    {id: 3, image: image1},
    {id: 4, image: image2},
    {id: 4, image: image2},
    {id: 5, image: image3},
    {id: 5, image: image3},
    {id: 6, image: image1},
    {id: 6, image: image1},
    {id: 7, image: image2},
    {id: 7, image: image2},
  ];

  return (
    <div className="GameBoard">
      짝 맞추기 게임
      <div className="CardArea">
        {gameBoard.map((element, index) => (
          <Card key={index} id={element.id} image={element.image}/>
        ))}
      </div>
    </div>
  )
};

export default Game;