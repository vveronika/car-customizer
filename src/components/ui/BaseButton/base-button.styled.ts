import styled from 'styled-components';

export const Button = styled.button`
    background: transparent;
    border: 3px solid ${props => props.theme.greenHighlight};
    border-radius: 3px;
    color: ${props => props.theme.greenHighlight};
    font-size: 18px;
    padding: 5px 30px;
    text-transform: uppercase;
    font-weight: 700;
    width: 200px;
    box-shadow: ${props => props.theme.button.boxShadow};
    cursor: pointer;
    transition: all .19s linear;

    &:hover {
        border-color: ${props => props.theme.pinkHighlight};
        box-shadow: ${props => props.theme.button.boxHoverShadow};
        color: ${props => props.theme.pinkHighlight};
    }
`;
