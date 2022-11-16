import { Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

import UserMenu from 'components/UserMenu/UserMenu';

import { Nav, NavList, NavItem, NavLinkStyled } from './Header.styled';
import { Suspense } from 'react';
export default function Header() {
  return (
    <>
      <AppBar position="fixed" color="header">
        <Toolbar>
          <PermContactCalendarIcon
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          />
          <NavLinkStyled to="/">
            <Typography variant="h6" component="div">
              Phonebook
            </Typography>
          </NavLinkStyled>

          <Nav>
            <NavList>
              <NavItem>
                <NavLinkStyled to="/">Home</NavLinkStyled>
              </NavItem>
              <NavItem>
                <NavLinkStyled to="contacts">Contacts</NavLinkStyled>
              </NavItem>
            </NavList>
          </Nav>

          <UserMenu />
        </Toolbar>
      </AppBar>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
