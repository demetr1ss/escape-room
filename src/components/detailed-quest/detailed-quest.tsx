import * as S from './detailed-quest.styled';
import LoadingComponent from 'components/loading-component/loading-component';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import { MainLayout } from 'components/common/common';
import { Levels, LoadingStatus, QuestGenresName } from 'const/const';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetailedQuestAction } from 'store/api-actions';
import { getDetailedQuest, getDetailedQuestLoadedStatus } from 'store/detailed-quest-data/selectors';
import { BookingModal } from './components/components';

export default function DetailedQuest(): JSX.Element {
  const params = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDetailedQuestAction(`${params.id}`));
  }, [dispatch, params.id]);

  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const quest = useAppSelector(getDetailedQuest);
  const questLoadingStatus = useAppSelector(getDetailedQuestLoadedStatus);

  if (
    questLoadingStatus === LoadingStatus.Idle ||
    questLoadingStatus === LoadingStatus.Pending ||
    !quest
  ) {
    return (
      <LoadingComponent />
    );
  }

  const {coverImg, title, type, duration, peopleCount, level, description} = quest;

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`/${coverImg}`}
          alt={title}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>
              {title}
            </S.PageTitle>
            <S.PageSubtitle>
              {QuestGenresName[type]}
            </S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>
                  {`${duration} мин`}
                </S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>
                  {`${peopleCount.join('-')} чел`}
                </S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>
                  {Levels[level]}
                </S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={() => setIsBookingModalOpened(true)}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened &&
         <BookingModal
           setIsBookingModalOpened={setIsBookingModalOpened}
           peopleCount={peopleCount}
         />}
      </S.Main>
    </MainLayout>
  );
}
