import React from 'react';

import { ImageInterface } from './interfaces';

import { ImageComponent } from './styles'

function Image(props: ImageInterface) {
    return <ImageComponent {...props} />
}

export default Image;