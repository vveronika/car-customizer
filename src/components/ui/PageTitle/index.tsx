import React from 'react';
import { Title } from './page-title.styled';

interface Props {
  title: string;
  size?: 'large';
}
const PageTitle: React.FC<Props> = (props) => {
  return <Title size={props.size}>{props.title}</Title>;
};

export default PageTitle;
