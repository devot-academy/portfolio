import styled, { css } from 'styled-components';

import { ImageInterface } from './interfaces';

const colors = {
    PRIMARY: '#3C8267',
    SECONDARY: 'pink'
}

export const ImageComponent = styled.img<ImageInterface>`
    width: ${({ size }) => {
        if (size === 'small') return 40;
        if (size === 'medium') return 80;
        if (size === 'large') return 430;
        else return 100;
    }}px;
    height: ${({ size }) => {
        if (size === 'small') return 40;
        if (size === 'medium') return 80;
        if (size === 'large') return 430;
        else return 100;
    }}px;
    border-radius: ${({ isCircle }) => {
        if (isCircle === true) return 50;
        else return 0;
    }}%;
    ${({ hasBorderColor }) => hasBorderColor && css`
        border: 10px solid ${hasBorderColor && colors[hasBorderColor]};
        padding: 15px;    
    `}

}
`