import React from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { LoaderWrapper } from './loader.styled';
interface Props {
  size: number;
  color: string;
}

const Loader: React.FC<Props> = (props) => {
  return (
    <LoaderWrapper>
      <PacmanLoader size={props.size} color={props.color} />
    </LoaderWrapper>
  );
};

export default Loader;
