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
        <Form>
          <Title>Welcome To Phonebook</Title>
          <Box display="flex" flexDirection="column" gridGap={32}>
            <InputField
              nameLabel="Email"
              type="email"
              name="name"
              // value={name}
              pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
              title="Please check your email. We should use symbol '@' and '.'"
              required
              // onChange={handleChangeName}
            />

            <InputField
              nameLabel="Password"
              type="password"
              name="phone"
              // value={phone}
              title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              // onChange={handleChangePhone}
            />
            <InputField
              nameLabel="Repeat Password"
              type="password"
              name="phone"
              // value={phone}
              title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              // onChange={handleChangePhone}
            />
          </Box>

          <Box display="flex" justifyContent="center" mt="32px">
            <ButtonStyled name="Register" />
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
