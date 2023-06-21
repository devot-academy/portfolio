import React from 'react';
import * as Style from './styles';
import { HomeInterface } from './interfaces';

export default function HomeTemplate(props: HomeInterface) {
  return (
    <Style.Container>
      <Style.Logo />
      <Style.Navbar />
      <Style.Main />
      <Style.ImageComponent {...props.ImageProps}
        src='https://avatars.githubusercontent.com/u/106279151?v=4'
        alt='image'
      />
    </Style.Container>
  );
};