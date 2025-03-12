import css from './SearchBox.module.css';

export default function SearchBox({ onFilter }) {
  return (
    <div className={css.input}>
      <p>
        <b>Find contacts by name</b>
      </p>
      <input type="text" onChange={onFilter} />
    </div>
  );
}
