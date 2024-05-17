import "./App.css";
import { Fragment, useState, useEffect } from "react";
import { pokemonList } from "./pokemon";
import Card from "./Card";

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
  const [imgsLoaded, setImgsLoaded] = useState(false);

  const score = histList.length;

  if (isClicked) {
    if (histList.length > maxScore) {
      setMaxScore(histList.length);
    }
    setIsClicked(false);
  }

  useEffect(() => {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.url;
        // wait 0.5 seconds to simulate loading time
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image.url);
          }, 2000);

        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(pokemonList.map((image) => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  }, []);

  return (
    <>
      <div className="header">
        <p>Score: {score}</p>
        <p>Best Score: {maxScore}</p>
      </div>
      <div className="card-container">
        {imgsLoaded ? (
          shuffleList(pokemonList)
            .slice(0, 10)
            .map((pokemon) => {
              return (
                <Fragment key={pokemon.id}>
                  <Card
                    id={pokemon.id}
                    name={pokemon.name}
                    url={pokemon.url}
                    histList={histList}
                    setHistList={setHistList}
                    setIsClicked={setIsClicked}
                  />
                </Fragment>
              );
            })
        ) : (
          <h2>Calling Pokemon...</h2>
        )}
      </div>
    </>
  );
}

export default App;
