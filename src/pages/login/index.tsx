import { Button, Input } from '../../common';

import Logo from '../../assets/img/marks-joias-logo.png';

import * as Styles from './styles';

export default function Login(){
  return (
    <Styles.Container>
      <Styles.BackgroundImage>
        <img src={Logo} alt='marks-joias-logo.png' />
      </Styles.BackgroundImage>
      <Input name='id' placeholder='Identificação' register={() => {}} />
      <Input name='password' placeholder='Senha' register={() => {}} />

      <Button text='Entrar' />
    </Styles.Container>
  )
};
