import React from 'react';
import { Image } from './car-image.styled';
import Loader from 'components/ui/Loader';

interface Props {
  src: string;
}

const CarImage: React.FC<Props> = (props) => {
  const { src } = props;
  return <Image src={src} />;
};

export default CarImage;
