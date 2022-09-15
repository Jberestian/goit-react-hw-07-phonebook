import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  addContact,
  removeContact,
} from 'redux/items/items-operations';
import { useEffect } from 'react';

import { setFilter } from 'redux/filter/filter-action';

import ContactBook from './ContactBook/ContactBook';
import Filter from './Filter/Filter';
import Form from './Form/Form';

import { getFilter } from 'redux/filter/filter-selector';
import { getItems } from 'redux/items/items-selector';

const App = () => {
  const getState = ({ contacts }) => ({
    loading: contacts.loading,
    error: contacts.error,
  });

  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);
  const { loading, error } = useSelector(getState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddContact = data => {
    const action = addContact(data);
    dispatch(action);
  };

  const onRemoveContact = id => {
    dispatch(removeContact(id));
  };

  const getFiltredContacts = () => {
    const normalizeFilter = filter?.toLowerCase();
    const filterContacts = contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
    return filterContacts;
  };

  const filtredArray = getFiltredContacts();

  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmit={onAddContact} />
      <h2>Contacts</h2>
      <Filter
        value={filter}
        onChange={event => dispatch(setFilter(event.currentTarget.value))}
      />
      {error && <p>Не удалось загрузить контакты!!! </p>}
      {loading ? (
        <p>...Loadind</p>
      ) : (
        <ContactBook contacts={filtredArray} removeContact={onRemoveContact} />
      )}
    </div>
  );
};

// const App = () => {
//   const contacts = useSelector(store => store.contacts.contacts);
//   const filter = useSelector(store => store.contacts.filter);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   const onAddContacts = ({ name, number }) => {
//     const action = addContact(name, number);
//     const arrayOfName = contacts && contacts.map(contact => contact.name);
//     if (arrayOfName && arrayOfName.includes(name)) {
//       return alert(`${name} is already in contacts`);
//     }
//     dispatch(action);
//   };

//   const onRemoveContacts = contact_id => {
//     dispatch(removeContact(contact_id));
//   };

//   const getFiltredContacts = () => {
//     const normalizeFilter = filter.toLowerCase();
//     const filterContacts =
//       contacts &&
//       contacts.filter(contact =>
//         contact.name.toLowerCase().includes(normalizeFilter)
//       );
//     return filterContacts;
//   };

//   const filtredArray = getFiltredContacts();

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <Form onSubmit={onAddContacts} />
//       <h2>Contacts</h2>
//       <Filter
//         value={filter}
//         onChange={event => dispatch(setFilter(event.currentTarget.value))}
//       />
//       <ContactBook contacts={filtredArray} removeContact={onRemoveContacts} />
//     </div>
//   );
// };

export default App;
