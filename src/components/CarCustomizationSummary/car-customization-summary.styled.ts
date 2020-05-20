import styled from 'styled-components';

export const SummaryWrapper = styled.div`
  border: 3px solid ${(props) => props.theme.pinkHighlight};
  border-radius: 20px;
  padding: 20px;
  box-shadow: ${props => props.theme.summaryTileBoxShadow};
  margin-bottom: 30px;

  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const SummaryTitle = styled.div`
    font-family: 'Raleway', sans-serif;
    margin: 0 0 6px;
    z-index: 1;
    color: ${props => props.theme.greenHighlight};
`;

export const ImageWrapper = styled.div``;

export const TableContent = styled.div``;

export const ComponentsWrapper = styled.div``;

export const PriceWrapper = styled.div``;
