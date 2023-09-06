import { colors } from "../../global/theme";

export interface ButtonProps {
  text?: string;

  background?: keyof typeof colors.backgrounds;
};