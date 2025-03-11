import { useState, useEffect } from 'react';
import './App.css';
import ContactList from './components/ContactList/ContactList.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx';

function App() {
  const phoneBook = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  // ================================================================
  const [contacts, setContacts] = useState(() => {
    const contactsLS = localStorage.getItem('key-contact');
    return contactsLS ? JSON.parse(contactsLS) : phoneBook;
  });

  useEffect(() => {
    localStorage.setItem('key-contact', JSON.stringify(contacts));
  }, [contacts]);

  // додати контакт
  const addContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };
  // видалити контакт
  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  // фільтр
  const [filter, setFilter] = useState('');

  const findContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  // ============================================================
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox onFilter={e => setFilter(e.target.value)} />
        <ContactList phoneBook={findContacts} onDelete={deleteContact} />
      </div>
    </>
  );
}

export default App;
