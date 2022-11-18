import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner';

import {
  getIsLoading,
  getFilteredContacts,
  getIsLoggedIn,
} from 'redux/selectors';
import {
  fetchContacts,
  deleteContact,
} from 'redux/contacts/contactsOperations';

import { Box } from '../Box';
import ModalUpdate from 'components/ModalUpdate/ModalUpdate';

import {
  ContactsList,
  ContactItem,
  Icon,
  NameContact,
  ButtonRed,
} from './ContactList.styled';

function ContactList() {
  const filteredContacts = useSelector(getFilteredContacts);
  const isLoading = useSelector(getIsLoading);
  const isLoggedIn = useSelector(getIsLoggedIn);

  const dispatch = useDispatch();
  const deleteContactReducer = contactId => {
    dispatch(deleteContact(contactId));
  };

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <Box>
      {isLoading ? (
        <ThreeDots color="#02897A" />
      ) : (
        <ContactsList>
          {filteredContacts.map(contact => {
            return (
              <ContactItem key={contact.id}>
                <Icon />
                <NameContact>
                  {contact.name}: {contact.number}
                </NameContact>
                <Box display="flex" justifyContent="end" gridGap={2}>
                  <ModalUpdate
                    name={contact.name}
                    number={contact.number}
                    contactId={contact.id}
                  />
                  <ButtonRed
                    type="button"
                    name="Delete"
                    onClick={() => deleteContactReducer(contact.id)}
                  />
                </Box>
              </ContactItem>
            );
          })}
        </ContactsList>
      )}
    </Box>
  );
}

export default ContactList;
