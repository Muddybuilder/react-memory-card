export default function Card({ id, histList = [], setHistList, setIsClicked }) {
  const cardId = id;

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
      <button onClick={handleClick}>{cardId}</button>
    </>
  );
}
