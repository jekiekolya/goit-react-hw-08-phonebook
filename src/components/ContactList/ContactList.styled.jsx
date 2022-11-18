import styled from '@emotion/styled';
import { MdPermContactCalendar } from 'react-icons/md';

import Button from '../Button';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[2]}px;

  margin-top: ${p => p.theme.space[3]}px;
`;

export const ContactItem = styled.li`
  display: grid;
  grid-template-columns:
    ${p => p.theme.space[4]}px
    1fr
    ${p => p.theme.space[8]}px;
  grid-template-rows: ${p => p.theme.space[5]}px;
  grid-column-gap: ${p => p.theme.space[5]}px;
  justify-content: space-between;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;

  font-size: ${p => p.theme.fontsSizes.m}px;

  padding: ${p => p.theme.space[3]}px;

  &&:hover,
  &&:focus {
    box-shadow: 0px 2px 18px ${p => p.theme.colors.accent};
    border-radius: 8px;
  }
`;

export const NameContact = styled.div`
  text-align: start;
`;

export const Icon = styled(MdPermContactCalendar)`
  width: ${p => p.theme.space[4]}px;
  height: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.accentSecondary};
`;

export const ButtonRed = styled(Button)`
  color: #f03e3d;
  border-color: #f03e3d;

  &&:active {
    background-color: #f03e3d;
  }
`;
