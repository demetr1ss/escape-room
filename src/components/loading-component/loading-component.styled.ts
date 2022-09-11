import styled, { keyframes } from 'styled-components';

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 1rem; }
  100% { margin-bottom: 0; }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  align-items: flex-end;
  justify-content: center;
`;

export const Dot1 = styled.div`
  background-color: white;
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin: 0 0.25rem;
  /*Animation*/
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: 0s;
`;

export const Dot2 = styled.div`
  background-color: white;
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin: 0 0.25rem;
  /*Animation*/
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: 0.1s;
`;

export const Dot3 = styled.div`
  background-color: white;
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin: 0 0.25rem;
  /*Animation*/
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: 0.2s;
`;
