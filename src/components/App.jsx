import { Section, Title } from './App.styled';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { contactSelector } from '../redux/selectors';

export const App = () => {
  const { contacts } = useSelector(contactSelector);

  // const handleChange = data => {
  //   const newContact = {
  //     id: nanoid(),
  //     ...data,
  //   };

  //   if (takenName(newContact.name)) {
  //     return toast.error(`${newContact.name} is already in contacts`);
  //   }

  //   dispatch(addContact(newContact));
  // };

  // const takenName = contactName =>
  //   contacts.find(contact => contact.name === contactName);

  // const handleDelete = id => {
  //   dispatch(deleteContact(id));
  // };

  // const handleFilter = ({ target: { value } }) => {
  //   dispatch(filterContacts(value));
  // };

  // const getContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const currentContacts = getContacts();

  return (
    <>
      <div>
        <Toaster />
      </div>
      <Section>
        <Title>Phonebook</Title>
        <Form />
      </Section>
      <Section>
        {!!contacts.length && (
          <>
            <Title>Contacts</Title>
            <Filter />
            <ContactsList />
          </>
        )}
      </Section>
    </>
  );
};
