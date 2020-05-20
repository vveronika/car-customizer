import styled, { ThemedStyledProps } from 'styled-components';

interface PageTitleProps {
  size?: 'large';
}

const fontSize = (props: ThemedStyledProps<PageTitleProps, any>) => {
  if (props.size === 'large') {
    return props.theme.largeTitle;
  }
  return props.theme.defaultTitle;
};

export const Title = styled.h1<PageTitleProps>`
  color: ${props => props.theme.greenHighlight};
  text-transform: uppercase;
  font-size: ${(props) => fontSize(props)};
  font-weight: 400;
  margin: 0 0 15px;
  font-family: 'Monoton', cursive;
  text-align: center;
  text-shadow: 0 0 0px #fff, 0 0 1px #fff, 0 0 0px #00ffff, 0 0 1px #00ffff, 0 0 1px #00ffff, 0 0 7px #00ffff, 0 0 35px #00ffff;
`;
