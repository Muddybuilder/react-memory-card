import "./App.css";
import { useEffect, useState } from "react";
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
  useEffect(() => {
    if (isClicked) {
      if (histList.length > maxScore) {
        setMaxScore(histList.length);
      }
    }
  }, [isClicked]);

  useEffect(() => {
    if (isClicked) {
      setIsClicked(false);
    }
  }, [isClicked]);
  return (
    <>
      <p>Hello!</p>
      <p>score:{score}</p>
      <p>max Score: {maxScore}</p>
      <div>
        {shuffleList(idList).map((pokemon) => {
          return (
            <div key={pokemon.id}>
              <Card
                id={pokemon.id}
                name={pokemon.name}
                histList={histList}
                setHistList={setHistList}
                setIsClicked={setIsClicked}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
