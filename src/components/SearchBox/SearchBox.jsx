export default function SearchBox({ value, onFilter }) {
  const handleChange = event => {
    onFilter(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}
