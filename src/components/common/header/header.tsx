import * as S from './header.styled';
import logo from 'assets/img/logo.svg';
import { AppRoute } from 'const/const';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header(): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (currentRoute: string): boolean => location.pathname === currentRoute;

  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.Logo onClick={() => navigate(AppRoute.Main)}>
          <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </S.Logo>

        <S.Navigation>
          <S.Links>
            <S.LinkItem>
              <S.Link $isActiveLink={isActive(AppRoute.Main)} to={AppRoute.Main}>
                Квесты
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">Новичкам</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">Отзывы</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">Акции</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link $isActiveLink={isActive(AppRoute.Contacts)} to={AppRoute.Contacts}>Контакты</S.Link>
            </S.LinkItem>
          </S.Links>
        </S.Navigation>
        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  );
}
