import React from 'react';
import RadioButtonTile from 'components/ui/RadioButtonTile';
import {
  ConfigWrapper,
  ConfigTitle,
  TilesWrapper,
} from 'components/CarComponentsConfig/car-components-config.styled';
import { Color } from 'models/types';
import RadioButtonColorTile from 'components/ui/RadioButtonColorTile';
import { animated } from 'react-spring';
import { useFadeAnimation } from 'helpers/animations';

interface Props<T> {
  configTitle: string;
  components?: T[];
  colors?: Color[];
  chosenElementName: string;
  chooseElement: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputsGroupName: string;
}

const CarComponentsConfig = <T extends object>(props: Props<T>) => {
  const {
    configTitle,
    components,
    colors,
    chosenElementName,
    chooseElement,
    inputsGroupName,
  } = props;
  return (
    <animated.div style={useFadeAnimation()}>
      <ConfigWrapper>
        <ConfigTitle>{configTitle}</ConfigTitle>
        <TilesWrapper>
          {components &&
            components.map((c: any) => (
              <RadioButtonTile
                key={c.id}
                id={c.id}
                size={c.size}
                name={inputsGroupName}
                value={c.name}
                checked={chosenElementName === c.name}
                title={c.name}
                onChange={chooseElement}
              />
            ))}
          {colors &&
            colors.map((c: any) => (
              <RadioButtonColorTile
                key={c.id}
                id={c.id}
                name={inputsGroupName}
                value={c.name}
                checked={chosenElementName === c.name}
                title={c.name}
                onChange={chooseElement}
              />
            ))}
        </TilesWrapper>
      </ConfigWrapper>
    </animated.div>
  );
};

export default CarComponentsConfig;
