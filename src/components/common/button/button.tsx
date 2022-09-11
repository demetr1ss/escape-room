import * as S from './button.styled';
import React from 'react';

type ButtonPropsType = {
  children?: React.ReactNode,
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({children, ...props }: ButtonPropsType): JSX.Element {
  return (
    <S.Button {...props}>
      {children}
    </S.Button>
  );
}
