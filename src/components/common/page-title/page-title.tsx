import * as S from './page-title.styled';
import { PropsWithChildren } from 'react';

export default function PageTitle({ children, ...props }: PropsWithChildren): JSX.Element {
  return (
    <S.PageTitle {...props}>
      {children}
    </S.PageTitle>
  );
}
