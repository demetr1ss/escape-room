import styled from 'styled-components';

export const PageSubtext = styled.p`
  margin: 0;
  margin-bottom: 9px;
  padding: 0;

  font-size: ${({ theme }) => theme.font.semibase};
  line-height: 144%;

  color: ${({ theme }) => theme.color.tangerine};
`;
