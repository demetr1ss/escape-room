import { QuestGenresName } from 'const/const';
import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import * as S from './quests-genres.styled';

type QuestGenresPropsType = {
  activeGenre?: string;
}

const createIconGenre = (genre: string) => {
  switch(genre){
    case 'AllQuests':
      return <IconAllQuests />;
    case 'Adventures':
      return <IconAdventures />;
    case 'Horrors':
      return <IconHorrors />;
    case 'Mystic':
      return <IconMystic />;
    case 'Detective':
      return <IconDetective />;
    case 'Scifi':
      return <IconScifi />;
    default:
      throw new Error(`${genre} dosn't exist`);
  }
};

export default function QuestGenres({activeGenre}: QuestGenresPropsType): JSX.Element {
  return (
    <S.Tabs>
      {Object.keys(QuestGenresName).map((genre) => {
        const isActive = activeGenre === genre;

        return (
          <S.TabItem key={genre}>
            <S.TabBtn isActive={isActive}>
              {createIconGenre(genre)}
              <S.TabTitle>{QuestGenresName[genre]}</S.TabTitle>
            </S.TabBtn>
          </S.TabItem>
        );}
      )}
    </S.Tabs>
  );
}
