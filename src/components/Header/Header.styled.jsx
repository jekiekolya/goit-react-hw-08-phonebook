import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.ul`
  margin-left: ${p => p.theme.space[5]}px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: ${p => p.theme.space[4]}px;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.009em;

  &&.active {
    font-weight: 600;
  }
`;
