import React from 'react';
import * as Style from './styles';
import Text from '@/components/atoms/Text';
import Image from '../../atoms/Image/index';
import { MyPhoto } from '../home/styles';
import { ImageInterface } from '@/components/atoms/Image/interfaces';
import { Title } from './styles';


interface Props {
    AboutProps: string;
    MyPhotoAboutProps: ImageInterface;
    MyText: string;
    MyText1: string;
    Title: string;
    Title1: string;


  }
  
 

export default function HomeTemplate({ 
    AboutProps,
     MyPhotoAboutProps,
     MyText,
     MyText1,
     Title,
     Title1,


     }: Props){

    return (
        <Style.ContainerAbout>
            <Style.HeaderAbout>
            <Style.About type='headline-3'>About</Style.About>

         </Style.HeaderAbout>
         <Style.BodyText>
        <Style.MyPhotoAbout {...MyPhotoAboutProps}  size='large'   />
        <Style.GroupText>
        <Style.Title type='headline-5'>{Title}</Style.Title>
        <Style.MyText type='headline-6'>{MyText}</Style.MyText>
        <Style.Title1 type='headline-5'>{Title1}</Style.Title1>
        <Style.MyText type='headline-6'>{MyText1}</Style.MyText>
        </Style.GroupText>
        </Style.BodyText>
        </Style.ContainerAbout>

    )
    };
