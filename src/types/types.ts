export type OrderPostType = {
  name: string,
  peopleCount: number,
  phone: string,
  isLegal: boolean,
};

export type QuestType = {
  id: number,
  title: string,
  description: string,
  previewImg: string,
  coverImg: string,
  type: string,
  level: string,
  peopleCount: number[],
  duration: number
}
