import React from 'react';
import { Button } from 'components/ui/BaseButton/base-button.styled';

interface Props {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const BaseButton: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { label, onClick, disabled } = props;
  return (
    <Button disabled={disabled} onClick={onClick}>
      {label}
    </Button>
  );
};

export default BaseButton;
