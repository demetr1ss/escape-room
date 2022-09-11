import { MainLayout } from 'components/common/common';
import { AppRoute } from 'const/const';
import * as S from './not-found.styled';

export default function NotFound(): JSX.Element {
  return (
    <MainLayout>
      <S.ErrorText>404 PAGE NOT FOUND</S.ErrorText>
      <S.Link to={AppRoute.Main}>Вернуться на главную</S.Link>
    </MainLayout>
  );
}
