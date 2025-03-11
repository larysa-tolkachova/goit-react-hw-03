import css from './Contact.module.css';
import { FaUser, FaPhone } from 'react-icons/fa6';

export default function Contact({
  contactPerson: { name, number, id },
  onDelete,
}) {
  return (
    <div className={css.container}>
      <ul>
        <li>
          <FaUser />
          {name}
        </li>
        <li>
          <FaPhone />
          {number}
        </li>
      </ul>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
