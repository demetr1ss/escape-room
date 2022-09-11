import { MainLayout } from 'components/common/common';
import * as S from './error-screen.styled';

export default function ErrorScreen(): JSX.Element {
  return (
    <MainLayout>
      <S.ErrorText>Сервис временно недоступен</S.ErrorText>
    </MainLayout>
  );
}
