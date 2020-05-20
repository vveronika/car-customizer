import React from 'react';
import {
  TileWrapper,
  RadioInput,
  TileText,
  BadgeWrapper,
} from 'components/ui/RadioButtonTile/radio-button-tile.styled';

interface Props {
  id: number
  checked: boolean;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  size?: string;
}

const RadioButtonTile: React.FC<Props> = (props) => {
  const { id, checked, value, name, onChange, title, size } = props;
  const inputId = id.toString();
  return (
    <TileWrapper checked={checked}>
      {size && <BadgeWrapper checked={checked}>{size}</BadgeWrapper>}
      <RadioInput
        id={inputId}
        type="radio"
        checked={checked}
        value={value}
        name={name}
        onChange={onChange}
      />
      <TileText checked={checked}>{title}</TileText>
    </TileWrapper>
  );
};

export default RadioButtonTile;
