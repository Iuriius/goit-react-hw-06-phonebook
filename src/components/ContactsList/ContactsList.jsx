import { ContactsListItem } from '../ContactsListItem/ContactsListItem';
import { ContactUl } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import { contactSelector, filterSelector } from '../../redux/selectors';

const useFilterArray = (array, filter) => {
  return filter
    ? array.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : array;
};

export const ContactsList = () => {
  const { contacts } = useSelector(contactSelector);
  const { filter } = useSelector(filterSelector);
  // console.log(filter);
  const contactsList = useFilterArray(contacts, filter);

  return (
    <ContactUl>
      <ContactsListItem contacts={contactsList} />
    </ContactUl>
  );
};
