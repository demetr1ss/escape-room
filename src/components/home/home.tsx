import * as S from './home.styled';
import { MainLayout, PageTitle, PageHeading, PageSubtext } from 'components/common/common';
import { QuestsCatalog } from './components/components';

export default function HomePage(): JSX.Element {
  return (
    <MainLayout>
      <S.Main forwardedAs="main">
        <PageHeading>
          <PageTitle>Выберите тематику</PageTitle>
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </PageHeading>
        <QuestsCatalog />
      </S.Main>
    </MainLayout>
  );
}
