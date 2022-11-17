import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner';

import { register } from '../../redux/auth/authOperations';
import { getIsLoadingAuth, getIsLoggedIn } from 'redux/selectors';

import { Box } from 'components/Box';
import InputField from 'components/InputField';
import registerIcon from '../../images/Register.svg';

import {
  Form,
  Title,
  NavLinkStyled,
  ButtonStyled,
  Container,
} from './Register.styled';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLoading = useSelector(getIsLoadingAuth);
  const isLoggedIn = useSelector(getIsLoggedIn);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeName = e => {
    setName(e.currentTarget.value);
  };

  const handleChangeEmail = e => {
    setEmail(e.currentTarget.value);
  };

  const handleChangePassword = e => {
    setPassword(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const credentials = { name, email, password };
    dispatch(register(credentials));
  };

  useEffect(() => {
    if (isLoggedIn) {
      resetForm('', '', '');
      navigate('/');
    }
  }, [navigate, isLoggedIn]);

  function resetForm(resetName, resetEmail, resetPassword) {
    setName(resetName);
    setEmail(resetEmail);
    setPassword(resetPassword);
  }

  return (
    <Box
      bg="mainBg"
      color="text"
      padding="30px"
      mt="60px"
      display="grid"
      gridTemplateColumns="1fr 1fr"
      gridTemplateRows="auto"
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        <img src={registerIcon} alt="For people chatting" />
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Form onSubmit={handleSubmit}>
          <Title>Welcome To Phonebook</Title>
          <Box display="flex" flexDirection="column" gridGap={16}>
            <InputField
              nameLabel="UserName"
              type="text"
              name="email"
              value={name}
              required
              autocomplete
              onChange={handleChangeName}
            />

            <InputField
              nameLabel="Email"
              type="email"
              name="email"
              value={email}
              pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
              title="Please check your email. We should use symbol '@' and '.'"
              required
              autocomplete
              onChange={handleChangeEmail}
            />

            <InputField
              nameLabel="Password"
              type="password"
              name="password"
              value={password}
              required
              autocomplete
              onChange={handleChangePassword}
            />
          </Box>
          <Box display="flex" justifyContent="center" mt="32px">
            {isLoading ? (
              <ThreeDots color="#02897A" height={57} />
            ) : (
              <ButtonStyled name="Register" />
            )}
          </Box>
          <Box display="flex" justifyContent="center" mt="64px">
            <Container>
              <NavLinkStyled to="/login"> Login</NavLinkStyled>
              <NavLinkStyled to="/register">Register</NavLinkStyled>
            </Container>
          </Box>
        </Form>
      </Box>
    </Box>
  );
}
