import React from 'react';
import {
  SummaryWrapper,
  SummaryTitle,
  ImageWrapper,
  TableContent,
  ComponentsWrapper,
  PriceWrapper,
} from './car-customization-summary.styled';
import CarImage from 'components/ui/CarImage';
import Row from 'components/ui/Row';
import acid_wash from 'assets/car-images/acid_wash.jpg';
import pacman from 'assets/car-images/pacman.jpg';
import powersuit from 'assets/car-images/powersuit.jpg';
import purple_rain from 'assets/car-images/purple_rain.jpg';
import tron_turqouise from 'assets/car-images/tron_turqouise.jpg';
import { animated } from 'react-spring';
import { useFadeAnimation } from 'helpers/animations';

interface Props {
  summary: number;
  model: string;
  engine: string;
  gearbox: string;
  color: string;
}

const CarCustomizationSummary: React.FC<Props> = (props) => {
  const { summary, model, engine, gearbox, color } = props;

  const imagesSrc: any = {acid_wash, pacman, powersuit, purple_rain, tron_turqouise};
  const parseColorName = (color: string) => {
    return color.replace(/_/g, ' ');
  }

  return (
    <animated.div style={useFadeAnimation()}>
    <SummaryWrapper>
      <SummaryTitle>Summary</SummaryTitle>
      <ImageWrapper>
        <CarImage src={imagesSrc[color]} />
      </ImageWrapper>
      <TableContent>
        <ComponentsWrapper>
          <Row label="Model" value={model} />
          <Row label="Engine" value={engine} />
          <Row label="Gearbox" value={gearbox} />
          <Row label="Color" value={parseColorName(color)} />
        </ComponentsWrapper>
        <PriceWrapper>
          <Row label="Price" value={`$${summary.toString()}`} />
        </PriceWrapper>
      </TableContent>
    </SummaryWrapper>
    </animated.div>
  );
};

export default CarCustomizationSummary;
