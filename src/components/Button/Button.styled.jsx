import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
  padding-top: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;

  background-color: ${p => p.theme.colors.mainBg};
  color: ${p => p.theme.colors.accentSecondary};

  font-size: ${p => p.theme.fontsSizes.s}px;
  font-weight: 600;

  border: 2px solid ${p => p.theme.colors.accentSecondary};
  border-radius: ${p => p.theme.space[3]}px;

  &&:active {
    background-color: ${p => p.theme.colors.accentSecondary};
    color: ${p => p.theme.colors.mainBg};
  }
`;
