import styled from 'styled-components';

export const ConfigWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const TilesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ConfigTitle = styled.p`
  font-family: 'Raleway', sans-serif;
  margin: 0 0 6px;
  z-index: 1;
  color: ${props => props.theme.greenHighlight};
`;
