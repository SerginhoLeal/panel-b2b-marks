import { styled, css } from "styled-components";

export const Container = styled.div`
  display: flex;

  width: 100%;
  height: 100vh;

  align-items: center;
  flex-direction: column;
  justify-content: center;

  ${({ theme }) => css`
    background-color: ${theme.colors.backgrounds.default};
  `};
`;

export const BackgroundImage = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 150px;
  height: 150px;

  img {
    width: 100px;
    height: 100px;

    border-radius: 50px;
  }
`;