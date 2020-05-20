import React from 'react';
import {
  TileWrapper,
  RadioInput,
} from 'components/ui/RadioButtonColorTile/radio-button-color-tile.styled';

interface Props {
  id: number;
  checked: boolean;
  value: 'acid_wash' | 'purple_rain' | 'tron_turqouise' | 'pacman' | 'powersuit';
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
}
const RadioButtonColorTile: React.FC<Props> = (props) => {
  const { checked, value, name, onChange, title } = props;
  return (
    <TileWrapper checked={checked} value={value}>
      <RadioInput
        type="radio"
        checked={checked}
        value={value}
        name={name}
        onChange={onChange}
      />
      {/* miejsce na tip */}
    </TileWrapper>
  );
};

export default RadioButtonColorTile;
