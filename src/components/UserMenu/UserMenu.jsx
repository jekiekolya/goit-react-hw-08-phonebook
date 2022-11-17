import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Box } from 'components/Box';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn, getUsername } from 'redux/selectors';
import { logOut } from 'redux/auth/authOperations';

import { NavLinkStyled } from './UserMenu.styled';

export default function UserMenu() {
  const userName = useSelector(getUsername);
  const isLoggedIn = useSelector(getIsLoggedIn);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnClick = e => {
    e.preventDefault();
    dispatch(logOut());
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate, isLoggedIn]);

  return (
    <Box display="flex" ml="auto" alignItems="center" gridGap={32}>
      <p>{userName}</p>
      <NavLinkStyled onClick={handleOnClick}>LOGOUT</NavLinkStyled>
    </Box>
  );
}
