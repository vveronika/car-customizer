import { ThemedStyledProps } from 'styled-components';

export const theme = {
  bold: 700,
  regular: 500,
  largeTitle: '70px',
  defaultTitle: '40px',
  pinkHighlight: '#ff0095',
  greenHighlight: '#00ffff',
  summaryTileBoxShadow: "0 0 20px #ff0095",
  button: {
    boxShadow: "0 0 20px #00ffff",
    boxHoverShadow: "0 0 40px #ff0095",
  },
  activeTile: {
    border: '3px solid #ff0095',
    badgeBackground: '#ff0095',
    badgeColor: '#fff',
    boxShadow: "0 0 20px #ff0095",
    textColor: "#00ffff",
    textShadow: "0 0 0px #fff, 0 0 10px #fff, 0 0 15px #00ffff, 0 0 20px #00ffff, 0 0 25px #00ffff, 0 0 30px #00ffff, 0 0 35px #00ffff",
  },
  tile: {
    border: '2px solid #efefef',
    badgeBackground: '#8e0053',
    badgeColor: '#888788',
    textColor: "#146565",
  },
  colorTile: {
    background: {
      acid_wash: '#3968cb',
      purple_rain: '#ff68a8',
      tron_turqouise: '#0fe7e2',
      pacman: '#faeb0f',
      powersuit: '#ff2153',
    },
  },
};

export interface ActiveTileProps {
  checked?: boolean;
}

export const styleActiveTile = (
  props: ThemedStyledProps<ActiveTileProps, any>,
  property: string,
) => {
  if (props.checked) {
    return props.theme.activeTile[property];
  }
  return props.theme.tile[property];
};