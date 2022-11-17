import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner';
import Checkbox from '@mui/material/Checkbox';

import { getIsLoadingAuth, getIsLoggedIn } from 'redux/selectors';
import { logIn } from 'redux/auth/authOperations';

import { Box } from 'components/Box';
import InputField from 'components/InputField';
import loginIcon from '../../images/Login.svg';

import {
  Form,
  Title,
  NavLinkStyled,
  ButtonStyled,
  Container,
} from './Login.styled';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLoading = useSelector(getIsLoadingAuth);
  const isLoggedIn = useSelector(getIsLoggedIn);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeEmail = e => {
    setEmail(e.currentTarget.value);
  };

  const handleChangePassword = e => {
    setPassword(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const credentials = { email, password };
    dispatch(logIn(credentials));
  };

  useEffect(() => {
    if (isLoggedIn) {
      resetForm('', '');
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  function resetForm(resetEmail, resetPassword) {
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
        <img src={loginIcon} alt="For people chatting" />
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Form onSubmit={handleSubmit}>
          <Title>Welcome Back</Title>
          <Box display="flex" flexDirection="column" gridGap={32}>
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
          <Box display="flex" alignItems="center" mt="8px">
            <Checkbox color="header" aria-label="Remember me" />
            <p>Remember me</p>
          </Box>

          <Box display="flex" justifyContent="center" mt="16px">
            {isLoading ? (
              <ThreeDots color="#02897A" height={57} />
            ) : (
              <ButtonStyled name="Login" />
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
