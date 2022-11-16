import { Box } from 'components/Box';

import { NavLinkStyled } from './UserMenu.styled';

export default function UserMenu() {
  return (
    <Box display="flex" ml="auto" alignItems="center" gridGap={32}>
      {/* <p>mango@mail.com</p> */}
      <NavLinkStyled to="login">LOGIN/REGISTER</NavLinkStyled>
    </Box>
  );
}
