import styled from 'styled-components';

export const RowWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 10px 0;
    border-bottom: 1px solid #2e3554;
`;

export const Label = styled.p`
margin: 0;
color: ${props => props.theme.greenHighlight};
text-transform: uppercase;
font-weight: 700;
font-size: 10px;
`;

export const Value = styled.p`
margin: 0;
color: ${props => props.theme.greenHighlight};
font-size: 18px;
`;
