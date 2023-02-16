import PropTypes from 'prop-types';
import {
  ContactItem,
  ContactName,
  ContactNumber,
  Button,
} from './ContactsListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';

export const ContactsListItem = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {contacts.map(contact => (
        <ContactItem key={contact.id}>
          <ContactName>
            {contact.name[0].toUpperCase() + contact.name.substring(1)}:
            <ContactNumber>{contact.number}</ContactNumber>
          </ContactName>
          <Button onClick={() => handleDeleteContact(contact.id)}>
            Delete
          </Button>
        </ContactItem>
      ))}
    </>
  );
};

ContactsListItem.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
};
