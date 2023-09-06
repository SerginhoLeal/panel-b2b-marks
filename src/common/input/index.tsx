import React from 'react';
// import { Controller, useForm } from 'react-hook-form';

import * as Styles from './styles';

import { Lock, PersonalCard } from '../../assets/svg';

interface Props {
  name: string;
  register: any;
  errors?: any;
  placeholder: string;
  // icon: SVGProps<SVGSVGElement>;
  // type: 'search' | 'cep';
};

const Input: React.FC<Props> = ({
  name,
  errors,
  register,
  placeholder = 'text',
}: Props) => {
  return (
    <>
      <Styles.Container>

        <Styles.ContainerSvg>
          {name === 'id' ? <PersonalCard width={22} /> : <Lock width={22} />}
        </Styles.ContainerSvg>

        <span />

        <Styles.InputStyles name={name} type={name} placeholder={placeholder}
          // {...register(name, { require: true })}
        />

      </Styles.Container>
      {errors?.message && <p>{errors.message}</p>}
    </>
  );
}

export { Input };