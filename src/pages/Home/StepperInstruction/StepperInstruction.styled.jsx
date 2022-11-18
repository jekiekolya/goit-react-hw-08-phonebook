import styled from '@emotion/styled';

export const SlideEffect = styled.div`
  && > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;

    position: relative;

    height: 500px;
    overflow: hidden;
    border: 2px solid ${p => p.theme.colors.accentSecondary};
    border-radius: 32px;
  }

  && span {
    position: absolute;
    bottom: ${p => p.theme.space[4]}px;

    padding-top: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[6]}px;
    padding-bottom: ${p => p.theme.space[4]}px;
    padding-left: ${p => p.theme.space[6]}px;

    color: ${p => p.theme.colors.accentSecondary};
    background: ${p => p.theme.colors.mainBg};

    font-size: ${p => p.theme.fontsSizes.m}px;
    font-weight: 600;
    text-align: center;

    border: 2px solid ${p => p.theme.colors.accentSecondary};
    box-shadow: 0px 2px 18px ${p => p.theme.colors.accent};
    border-radius: 8px;
  }
`;
