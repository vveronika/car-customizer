import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 0 13px;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ConfigurationWrapper = styled.div``;

export const SummaryWrapper = styled.div``;

