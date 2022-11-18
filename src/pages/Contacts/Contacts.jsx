import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/selectors';

import { Box } from 'components/Box';
import FormAddContact from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';

import Filter from 'components/Filter/Filter';
import { MainTitle, SecondaryTitle } from './Contacts.styled';

export default function Contacts() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
  }, [isLoggedIn, navigate]);

  return (
    <Box
      bg="mainBg"
      color="text"
      padding="30px"
      mt="60px"
      display="grid"
      gridTemplateColumns="2fr 3fr"
      gridTemplateRows="auto"
    >
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        gridGap={36}
      >
        <MainTitle>Add Contact</MainTitle>
        <FormAddContact />
      </Box>
      <Box display="flex" flexDirection="column" gridGap={36}>
        <SecondaryTitle>Contacts</SecondaryTitle>
        <Box>
          <Filter />
          <ContactList />
        </Box>
      </Box>
    </Box>
  );
}
