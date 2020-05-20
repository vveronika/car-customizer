import React from 'react';
import {
    RowWrapper,
    Label,
    Value,
} from './row.styled';

interface Props {
  label: string;
  value: string;
}

const Row: React.FC<Props> = (props) => {
  const { label, value } = props;
  return (
      <RowWrapper>
          <Label>
            {label}
          </Label>
          <Value>
            {value}
          </Value>
      </RowWrapper>
  );
};

export default Row;
