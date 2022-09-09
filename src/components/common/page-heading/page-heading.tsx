import * as S from './page-heading.styled';
import { PropsWithChildren } from 'react';

export default function PageHeading({ children, ...props }: PropsWithChildren): JSX.Element {
  return (
    <S.PageHeading {...props}>{children}</S.PageHeading>
  );
}

