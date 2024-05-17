import "./App.css";
import { Fragment, useState } from "react";
import Card from "./Card";

const idList = [
  { id: 1, name: "pikachu" },
  { id: 2, name: "bulbasaur" },
  { id: 3, name: "charmander" },
  { id: 4, name: "caterpie" },
  { id: 5, name: "abra" },
  { id: 6, name: "muk" },
  { id: 7, name: "mewtwo" },
  { id: 8, name: "meowth" },
  { id: 9, name: "mankey" },
  { id: 10, name: "krabby" },
  { id: 11, name: "squirtle" },
  { id: 12, name: "blastoise" },
  { id: 13, name: "metapod" },
  { id: 14, name: "weedle" },
  { id: 15, name: "pidgey" },
  { id: 16, name: "rattata" },
  { id: 17, name: "fearow" },
  { id: 18, name: "arbok" },
  { id: 19, name: "sandshrew" },
  { id: 20, name: "jigglypuff" },
];

function shuffleList(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [maxScore, setMaxScore] = useState(0);
  const [histList, setHistList] = useState([]);
  const score = histList.length;

  if (isClicked) {
    if (histList.length > maxScore) {
      setMaxScore(histList.length);
    }
    setIsClicked(false);
  }
  return (
    <>
      <div className="header">
        <p>Score: {score}</p>
        <p>Best Score: {maxScore}</p>
      </div>
      <div className="card-container">
        {shuffleList(idList)
          .slice(0, 10)
          .map((pokemon) => {
            return (
              <Fragment key={pokemon.id}>
                <Card
                  id={pokemon.id}
                  name={pokemon.name}
                  histList={histList}
                  setHistList={setHistList}
                  setIsClicked={setIsClicked}
                />
              </Fragment>
            );
          })}
      </div>
    </>
  );
}

export default App;
