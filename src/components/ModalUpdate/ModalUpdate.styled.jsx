import styled from '@emotion/styled';

import Button from '../Button';

export const ButtonBlue = styled(Button)`
  color: #11b5e4;
  border-color: #11b5e4;
  &&:active {
    background-color: #11b5e4;
  }
`;

export const Form = styled.form`
  width: ${p => p.theme.space[7] * 3}px;

  padding-top: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  padding-left: ${p => p.theme.space[4]}px;
`;

export const ButtonForm = styled(Button)``;
