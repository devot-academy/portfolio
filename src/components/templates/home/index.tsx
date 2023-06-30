import React from 'react';
import * as Style from './styles';
import { IImage } from "@/components/atoms/image/index";
import { IText } from "@/components/atoms/text/index";
import { IButton } from "@/components/molecules/button/index";

export interface IHome {
  ButtonProps?: IButton;
  ImageProps?: IImage;
  TextProps?: IText
}

export default function HomeTemplate(props: IHome) {
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