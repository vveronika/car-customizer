import styled from 'styled-components';
import { styleActiveTile } from 'app.styled';
import { ActiveTileProps } from 'app.styled';

export const TileWrapper = styled.label<ActiveTileProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: auto;
    margin: 10px;
    width: 130px;
    padding: 5px 15px;
    border: 1px solid #000;
    border-radius: 3px;
    cursor: pointer;
    border: ${(props) => styleActiveTile(props, 'border')};
    box-shadow: ${(props) => styleActiveTile(props, 'boxShadow')};
`;

export const RadioInput = styled.input`
  display: none;
`;

export const TileText = styled.p<ActiveTileProps>`
  color: ${(props) => styleActiveTile(props, 'textColor')};
  text-shadow: ${(props) => styleActiveTile(props, 'textShadow')};
  font-weight: 700;
`;

export const BadgeWrapper = styled.div<ActiveTileProps>`
  background-color: ${(props) => styleActiveTile(props, 'badgeBackground')};
  border-radius: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  font-weight: bold;
  color: ${(props) => styleActiveTile(props, 'badgeColor')};
`;
