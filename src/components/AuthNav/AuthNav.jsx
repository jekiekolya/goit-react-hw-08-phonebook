import { Box } from 'components/Box';

import { NavLinkStyled } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <Box display="flex" ml="auto" alignItems="center" gridGap={32}>
      {/* <p>mango@mail.com</p> */}
      <NavLinkStyled to="login">LOGIN/REGISTER</NavLinkStyled>
    </Box>
  );
}
