import { useEffect, useState } from "react";

const pokeApi = "https://pokeapi.co/api/v2/pokemon/";
export default function Card({
  id,
  name,
  histList = [],
  setHistList,
  setIsClicked,
}) {
  const cardId = id;
  const pokemonName = name;
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      const res = await fetch(pokeApi.concat(pokemonName));
      const ret = await res.json();
      const url = ret.sprites.front_default;
      setImgUrl(url);
    };
    fetchImage();
  }, [pokemonName]);

  function handleClick() {
    // check if cardId is in histList
    // add to histList if it's not in
    // reset histList if it's in
    if (histList.includes(cardId)) {
      setHistList([]);
    } else {
      const newList = histList.concat([cardId]);
      setHistList(newList);
    }
    setIsClicked(true);
  }

  return (
    <>
      <button>
        <img src={imgUrl} alt={pokemonName} onClick={handleClick} />
      </button>
    </>
  );
}
