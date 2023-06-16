import styled, { css } from 'styled-components'
import { FONTS } from '@/global/theme/fonts'
import { COLORS } from '@/global/theme/colors'

import { TextInterface } from './interfaces'


export const typeMapper = {
    H1: {
        as: 'h1',
        textFormat: css`
            ${FONTS.BOLD}
            font-size: 9.6rem;
        `,
    },
    H2: {
        as: 'h2',
        textFormat: css`
            ${FONTS.BOLD}
            font-size: 6rem;
        `
    },
    H3: {
        as: 'h3',
        textFormat: css`
            ${FONTS.BOLD}
            font-size: 4.8rem;
        
        `
    },
    H4: {
        as: 'h4',
        textFormat: css`
            ${FONTS.BOLD}
            font-size: 3.4rem;
        
        `
    },
    H5: {
        as: 'h5',
        textFormat: css`
            ${FONTS.BOLD}
            font-size: 2.4rem;
        
        `
    },
    H6: {
        as: 'h6',
        textFormat: css`
            ${FONTS.BOLD}
            font-size: 2rem;
        
        `
    },
    'Subtitle 1': {
        as: 'p',
        textFormat: css`
            ${FONTS.SEMI_BOLD}
            font-size: 1.6rem;
        
        `
    },
    'Subtitle 2': {
        as: 'p',
        textFormat: css`
            ${FONTS.MEDIUM}
            font-size: 1.4rem;
        
        `
    },
    'Body 1': {
        as: 'p',
        textFormat: css`
            ${FONTS.REGULAR}
            font-size: 1.6rem;
        
        `
    },
    'Body 2': {
        as: 'p',
        textFormat: css`
            ${FONTS.MEDIUM}
            font-size: 1.4rem;
        
        `
    },
    'BUTTON': {
        as: 'span',
        textFormat: css`
            ${FONTS.LIGHT}
            font-size: 1.4rem;
            text-transform: uppercase;
        `
    },
}

export const TextComponent = styled.span.attrs(({ type }: TextInterface) => ({
    as: typeMapper[type]?.as,
}))<TextInterface>`
    ${({ type }) => typeMapper[type]?.textFormat}
    color: ${({ color }) => color!== undefined ? COLORS[color] : COLORS.PRIMARY_LIGHT }
`;
