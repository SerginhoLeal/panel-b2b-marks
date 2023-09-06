import { css, styled } from "styled-components";

import { ButtonProps } from "./type";

export const Container = styled.button<ButtonProps>`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 200px;
  height: 50px;

  margin: 10px 0;

  border-radius: 2px;
  border: 0;

  cursor: pointer;

  ${({ theme }) => css`
    background-color: ${theme.colors.backgrounds.button_login};
  `};
`;