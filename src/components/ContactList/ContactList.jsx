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

import {
  ContactsList,
  ContactItem,
  Icon,
  NameContact,
} from './ContactList.styled';

import Button from '../Button';

import { Box } from '../Box';
import { useEffect } from 'react';

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
                <Button
                  type="button"
                  name="Delete"
                  onClick={() => deleteContactReducer(contact.id)}
                />
              </ContactItem>
            );
          })}
        </ContactsList>
      )}
    </Box>
  );
}

export default ContactList;
