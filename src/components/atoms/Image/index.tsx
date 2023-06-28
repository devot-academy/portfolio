import React from 'react';
import { ImageComponent } from './styles'

export interface ImageInterface {
    src: string;
    alt: string;
    size?: 'small' | 'medium' | 'large';
    isCircle?: boolean;
    hasBorderColor?: 'PRIMARY' | 'SECONDARY';
}

function Image(props: ImageInterface) {
    return <ImageComponent {...props} />
}

export default Image;