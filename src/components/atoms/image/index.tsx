import React from 'react';
import { ImageComponent } from './styles'

export interface IImage {
    src: string;
    alt: string;
    size?: 'small' | 'medium' | 'large';
    isCircle?: boolean;
    hasBorderColor?: 'PRIMARY' | 'SECONDARY';
}

function Image(props: IImage) {
    return <ImageComponent {...props} />
}

export default Image;