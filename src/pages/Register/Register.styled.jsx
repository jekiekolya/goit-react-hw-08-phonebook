import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import Button from '../../components/Button/Button';

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[5]}px;

  text-align: center;
  color: ${p => p.theme.colors.accentSecondary};
`;

export const Form = styled.form`
  width: 500px;
  min-height: 500px;

  padding-top: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[6]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  padding-left: ${p => p.theme.space[6]}px;

  box-shadow: 0px 2px 18px ${p => p.theme.colors.accent};
  border-radius: 8px;
`;

export const NavLinkStyled = styled(NavLink)`
  display: block;
  padding-top: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[6]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[6]}px;

  color: ${p => p.theme.colors.accentSecondary};

  &&.active {
    color: ${p => p.theme.colors.mainBg};
    background-color: ${p => p.theme.colors.accentSecondary};
  }
`;

export const ButtonStyled = styled(Button)`
  font-size: ${p => p.theme.fontsSizes.m}px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[6]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[6]}px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${p => p.theme.space[3]}px;
  overflow: hidden;
  outline: 2px solid ${p => p.theme.colors.accentSecondary};
`;