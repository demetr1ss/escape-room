import * as S from './app.styled';
import ErrorScreen from 'components/error-screen/error-screen';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import NotFound from 'components/not-found/not-found';
import LoadingComponent from 'components/loading-component/loading-component';
import browserHistory from 'components/browser-history';
import { ThemeProvider } from 'styled-components';
import { Routes, Route, HistoryRouter } from 'components/common/common';
import { appTheme } from './common';
import { AppRoute, LoadingStatus } from 'const/const';
import { useAppSelector } from 'hooks';
import { getQuestsDataLoadedStatus } from 'store/quests-data/selectors';

export default function App(): JSX.Element {
  const questsLoadingStatus = useAppSelector(getQuestsDataLoadedStatus);

  if (
    questsLoadingStatus === LoadingStatus.Idle ||
    questsLoadingStatus === LoadingStatus.Pending
  ) {
    return <LoadingComponent />;
  }

  if (questsLoadingStatus === LoadingStatus.Rejected) {
    return <ErrorScreen />;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <ThemeProvider theme={appTheme}>
        <S.GlobalStyle />
        <Routes>
          <Route path={AppRoute.Quest} element={<DetailedQuest />} />
          <Route path={AppRoute.Contacts} element={<Contacts />} />
          <Route path={AppRoute.Main} element={<Home />} />
          <Route path={AppRoute.NotFound} element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </HistoryRouter>
  );
}
