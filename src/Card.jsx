import { useEffect, useState } from "react";

export default function Card({
  id,
  name,
  url,
  histList = [],
  setHistList,
  setIsClicked,
}) {
  const cardId = id;
  const pokemonName = name;

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
      <button key={cardId} className="butt" onClick={handleClick}>
        <img
          key={cardId}
          src={url}
          alt={pokemonName}
          width="100%"
          height="100%"
        />
      </button>
    </>
  );
}
