import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ phoneBook, onDelete }) {
  return (
    <ul className={css.container}>
      {phoneBook.map(person => (
        <li key={person.id}>
          <Contact contactPerson={person} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
