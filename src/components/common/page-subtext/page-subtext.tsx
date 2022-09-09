import * as S from './page-subtext.styled';
import { PropsWithChildren } from 'react';

export default function PageSubtext({ children, ...props }: PropsWithChildren): JSX.Element {
  return (
    <S.PageSubtext {...props}>{children}</S.PageSubtext>
  );
}

