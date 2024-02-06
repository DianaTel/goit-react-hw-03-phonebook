import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactListStyle } from './ContactsList.styled';
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactListStyle>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ContactListStyle>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
