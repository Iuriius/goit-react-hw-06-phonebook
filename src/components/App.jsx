import { Section, Title } from './App.styled';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { contactSelector } from '../redux/selectors';

export const App = () => {
  const { contacts } = useSelector(contactSelector);

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
