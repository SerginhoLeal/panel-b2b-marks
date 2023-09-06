import { styled, css} from "styled-components";
import { ThemeProps } from "../../global/theme";

export const Text = styled.p<ThemeProps>`
  ${({ theme, typographyColors = 'default', fontWeight = 'normal' }) => css`
    color: ${theme.colors.typography[typographyColors]};
    font-family: 'Poppins', sans-serif;
    font-weight: ${theme.fontWeight[fontWeight]};
  `};
`;