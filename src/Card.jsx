export default function Card({ id, setChangeId, setHasChanged }) {
  const cardId = id;
  function handleClick() {
    setChangeId(cardId);
    setHasChanged(true);
  }
  return (
    <>
      <button onClick={handleClick}>cardId</button>
    </>
  );
}
