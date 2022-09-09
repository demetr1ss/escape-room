import * as S from './container.styled';
import { PropsWithChildren } from 'react';

export default function Container({ children, ...props }: PropsWithChildren): JSX.Element{
  return (
    <S.Container {...props}>
      {children}
    </S.Container>
  );
}
