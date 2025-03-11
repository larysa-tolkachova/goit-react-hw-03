export default function SearchBox({ onFilter }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" onChange={onFilter} />
    </div>
  );
}
