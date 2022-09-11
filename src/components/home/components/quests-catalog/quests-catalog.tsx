import QuestList from '../quest-list/quest-list';
import QuestGenres from '../quests-genre-item/quest-genres';

export default function QuestsCatalog(): JSX.Element {
  return(
    <>
      <QuestGenres />
      <QuestList />
    </>
  );
}
