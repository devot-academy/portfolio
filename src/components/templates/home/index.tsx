import React from 'react';
import * as Style from './styles';
import { ImageInterface } from "@/components/atoms/Image/index";
import { IText } from "@/components/atoms/Text/index";
import { ButtonInterface } from "@/components/molecules/button/index";

export interface HomeInterface {
  ButtonProps?: ButtonInterface;
  ImageProps?: ImageInterface;
  TextProps?: IText
}

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