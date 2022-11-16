import styled from '@emotion/styled';

export const Form = styled.form`
  width: ${p => p.theme.space[7] * 3}px;

  padding-top: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[6]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  padding-left: ${p => p.theme.space[6]}px;

  box-shadow: 0px 2px 18px ${p => p.theme.colors.accent};
  border-radius: 8px;
`;
