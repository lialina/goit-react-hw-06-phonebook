import { useState, useEffect, useMemo } from 'react';
import shortid from 'shortid';
import './App.css';
import Container from './components/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';

// With Redux Toolkit
import { phonebookSlice } from './redux/store';

// Before Redux Toolkit
// import { addContact } from './redux/actions';

export default function App() {
  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state);
  const [filter, setFilter] = useState('');

  // Before Redux and LocalStorage algorithm
  // const [contacts, setContacts] = useState(initialState.contacts);
  // const localStorageContacts = JSON.parse(localStorage.getItem('contacts'));

  // ----- [Study and do] Redux-Persist - to retrieve data from the localStorage and save it to the store
  // useEffect(() => {
  //   if (localStorageContacts) {
  //     setContacts(localStorageContacts);
  //     return;
  //   }
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmitWithAddContact = ({ contact }) => {
    // With Redux Toolkit
    dispatch(
      phonebookSlice.actions.addContact({ ...contact, id: shortid.generate() }),
    );

    // Before Redux Toolkit
    // dispatch(addContact({ ...contact, id: shortid.generate() }));

    // Before Redux
    // const newContact = {
    //   id: shortid.generate(),
    //   name: contact.name,
    //   number: contact.number,
    // };

    // if (
    //   contacts.find(presentContact => presentContact.name === newContact.name)
    // ) {
    //   alert(`${newContact.name} is already in contacts.`);
    //   return;
    // }

    // setContacts([newContact, ...contacts]);
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();

    let visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return visibleContacts;
  }, [contacts, filter]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmitWithAddContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />

      <ContactList contactsData={getVisibleContacts} />
    </Container>
  );
}
