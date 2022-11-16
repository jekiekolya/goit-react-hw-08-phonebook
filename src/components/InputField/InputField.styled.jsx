import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[2]}px;
`;

export const Input = styled.input`
  width: 100%;
  padding-top: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;

  font-size: ${p => p.theme.fontsSizes.m}px;
  font-weight: 500;

  background-color: ${p => p.theme.colors.mainBg};

  border: 2px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.space[3]}px;

  color: ${p => p.theme.colors.accentSecondary};

  &:focus-within {
    border: 2px solid ${p => p.theme.colors.accent};
    filter: drop-shadow(0px 3px 3px ${p => p.theme.colors.accent});
    outline: none;
  }
`;

export const NameLabel = styled.span`
  margin-bottom: ${p => p.theme.space[2]}px;

  font-size: ${p => p.theme.fontsSizes.m}px;
  font-weight: 600;

  color: ${p => p.theme.colors.accentSecondary};
`;
