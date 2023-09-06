import React from 'react';

import { Text } from '..';

import { ButtonProps } from './type';

import * as Styles from './styles';

export const Button: React.FC<ButtonProps> = ({ background = 'default', text }: ButtonProps) => {
  return (
    <Styles.Container background={background}>
      <Text typographyColors='white' fontWeight='semi_bold'>{text}</Text>
    </Styles.Container>
  )
};
