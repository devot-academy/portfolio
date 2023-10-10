import React from 'react';
import * as Style from './styles';

import { ImageInterface } from '@/components/atoms/Image/interfaces';

export interface Props {
    MyPhotoAboutProps: ImageInterface;
    mainTitle: string;
    mainText: string;
    secondaryTitle: string;
    secondaryText: string;
}

export default function AboutTemplate({ 
    MyPhotoAboutProps,
    mainText,
    mainTitle,
    secondaryText,
    secondaryTitle
}: Props){
    return (
        <Style.ContainerAbout>
            <Style.HeaderAbout>
                <Style.About type='headline-3'>About</Style.About>
            </Style.HeaderAbout>
            <Style.BodyText>
                <Style.MyPhotoAbout {...MyPhotoAboutProps}  size='large'   />
                <Style.GroupText>
                    <Style.Title type='headline-5'>{mainTitle}</Style.Title>
                    <Style.MyText type='Body-1'>{mainText}</Style.MyText>
                    <Style.Title1 type='headline-5'>{secondaryTitle}</Style.Title1>
                    <Style.MyText type='Body-1'>{secondaryText}</Style.MyText>
                </Style.GroupText>
            </Style.BodyText>
        </Style.ContainerAbout>
    )
};
