import { ThemeProvider } from 'styled-components';
import {
  Routes,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import { appTheme } from './common';
import { AppRoute } from 'const/const';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import * as S from './app.styled';

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Router>
        <Routes>
          <Route path={AppRoute.Quest} element={<DetailedQuest />} />
          <Route path={AppRoute.Contacts} element={<Contacts />} />
          <Route path={AppRoute.Main} element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

