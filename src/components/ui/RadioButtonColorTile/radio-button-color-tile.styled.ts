import styled, { ThemedStyledProps } from 'styled-components';
import { styleActiveTile } from 'app.styled';

interface ColorButtonTileProps {
  value?:
    | 'acid_wash'
    | 'purple_rain'
    | 'tron_turqouise'
    | 'pacman'
    | 'powersuit';
  checked?: boolean;
}

const styleBackgroundTile = (
  props: ThemedStyledProps<ColorButtonTileProps, any>,
  property: string,
) => {
  const { value } = props;
  if (
    value === 'acid_wash' ||
    value === 'purple_rain' ||
    value === 'tron_turqouise' ||
    value === 'pacman' ||
    value === 'powersuit'
  ) {
    return props.theme.colorTile.background[value];
  }
  return props.theme.colorTile.background.default;
};

export const TileWrapper = styled.label<ColorButtonTileProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 30px;
  cursor: pointer;
  margin: 10px;
  background-color: ${(props) => styleBackgroundTile(props, 'background')};
  border: ${(props) => styleActiveTile(props, 'border')};
  box-shadow: ${(props) => styleActiveTile(props, 'boxShadow')};
`;

export const RadioInput = styled.input`
  display: none;
`;
