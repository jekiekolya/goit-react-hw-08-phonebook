import { Suspense } from 'react';
import { getIsLoggedIn } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';

import { Nav, NavList, NavItem, NavLinkStyled } from './Header.styled';
export default function Header() {
  const isLoggedIn = useSelector(getIsLoggedIn);

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
              {isLoggedIn && (
                <NavItem>
                  <NavLinkStyled to="contacts">Contacts</NavLinkStyled>
                </NavItem>
              )}
            </NavList>
          </Nav>

          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
