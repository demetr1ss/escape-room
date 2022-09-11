import { Dot1, Dot2, Dot3, LoadingWrapper } from './loading-component.styled';

export default function LoadingComponent(): JSX.Element {
  return (
    <LoadingWrapper>
      <h3>Loading</h3>
      <Dot1 />
      <Dot2 />
      <Dot3 />
    </LoadingWrapper>
  );
}
