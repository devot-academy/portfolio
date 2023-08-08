import React from 'react';
import * as Style from './styles';
import { ImageInterface } from '@/components/atoms/Image/interfaces';
import { NavbarInterface } from '@/components/organisms/nav-bar/interfaces';
import { ButtonInterface } from '@/components/molecules/button/interfaces';

interface Props {
  LogoProps: ImageInterface;
  NavbarProps: NavbarInterface;
  presentation: string;
  title: string;
  description: string;
  ButtonPrimary: ButtonInterface;
  ButtonSecondary:  ButtonInterface;
  MyPhotoProps: ImageInterface;
}

export default function HomeTemplate({ 
    LogoProps,
    NavbarProps,
    presentation,
    title,
    description,
    ButtonPrimary,
    ButtonSecondary,
    MyPhotoProps,
  }: Props){
  return (
    <Style.Container>
      <Style.Header>
        <Style.Logo {...LogoProps} size='medium' />
        <Style.ContentMenu>
          <Style.Menu 
            AboutButtonProps={NavbarProps.AboutButtonProps}
            ContactButtonProps={NavbarProps.ContactButtonProps}
            ProjectButtonProps={NavbarProps.ProjectButtonProps}
            ResumeButtonProps={NavbarProps.ResumeButtonProps} />
        </Style.ContentMenu>
      </Style.Header>
      <Style.Body>
        <Style.ContentInfo>
          <Style.ContentPresentation>
            <Style.Presentation type='headline-6'>{presentation}</Style.Presentation>
            <Style.Title type='headline-1'>{title}</Style.Title>
            <Style.AboutMe type='headline-5' >{description}</Style.AboutMe>
          </Style.ContentPresentation>
          <Style.ContentButton>  
            <Style.ButtonPrimary {...ButtonPrimary}/>
            <Style.ButtonSecondary  {...ButtonSecondary} />
          </Style.ContentButton>
        </Style.ContentInfo>
        <Style.MyPhoto {...MyPhotoProps} isCircle size='large'/>
      </Style.Body>
    </Style.Container>
  );
};