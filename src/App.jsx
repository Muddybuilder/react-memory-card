import "./App.css";
import { useEffect, useState } from "react";
import Card from "./Card";

const idList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
        {shuffleList(idList).map((id) => {
          return (
            <div key={id}>
              <Card
                id={id}
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
