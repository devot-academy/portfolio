import styled, { css } from 'styled-components'
import { FONTS } from '@/global/theme/fonts'
import { COLORS } from '@/global/theme/colors'

import { IText } from '.'

export const typeMapper = {
    'headline-1': {
        as: 'h1',
        textFormat: css`
            ${FONTS.NORMAL}
            font-size: 9.6rem;
            line-height: 7.6rem; 
            letter-spacing: -0.15rem;
        `,
    },
    'headline-2': {
        as: 'h2',
        textFormat: css`
            ${FONTS.NORMAL}
            font-size: 6rem;
            line-height: 5.2rem;
            letter-spacing: -0.05rem;
        `
    },
    'headline-3': {
        as: 'h3',
        textFormat: css`
            ${FONTS.NORMAL}
            font-size: 4.8rem;
            line-height: 7.6rem;
            letter-spacing: 0rem;
        
        `
    },
    'headline-4': {
        as: 'h4',
        textFormat: css`
            ${FONTS.NORMAL}
            font-size: 3.4rem;
            line-height: 4.4rem;
            letter-spacing: 0.025rem;
        
        `
    },
    'headline-5': {
        as: 'h5',
        textFormat: css`
            ${FONTS.NORMAL}
            font-size: 2.4rem;
            line-height: 3.6rem;
            letter-spacing: 0rem;
        
        `
    },
    'headline-6': {
        as: 'h6',
        textFormat: css`
            ${FONTS.NORMAL}
            font-size: 2rem;
            line-height: 2.8rem;
            letter-spacing: 0.015rem;
        
        `
    },
    'Subtitle-1': {
        as: 'p',
        textFormat: css`
            ${FONTS.NORMAL}
            font-size: 1.6rem;
            line-height: 2.8rem;
            letter-spacing: 0.015rem;
        
        `
    },
    'Subtitle-2': {
        as: 'p',
        textFormat: css`
            ${FONTS.NORMAL}
            font-size: 1.4rem;
            line-height: 2.8rem;
            letter-spacing: 0.01rem;
        
        `
    },
    'Body-1': {
        as: 'p',
        textFormat: css`
            ${FONTS.NORMAL}
            font-size: 1.8rem;
            line-height: 2.8rem;
            letter-spacing: 0.05rem;
        
        `
    },
    'Body-2': {
        as: 'p',
        textFormat: css`
            ${FONTS.NORMAL}
            font-size: 1.6rem;
            line-height: 2.4rem;
            letter-spacing: 0.025rem;
        
        `
    },
    'BUTTON': {
        as: 'span',
        textFormat: css`
            ${FONTS.NORMAL}
            font-size: 1.8rem;
            line-height: 2.8rem;
            text-transform: uppercase;
            letter-spacing: 0.125rem;
        `
    },

    'caption': {
        as: 'span',
        textFormat: css`
            ${FONTS.NORMAL}
            font-size: 1.6rem;
            line-height: 2.4rem;
            letter-spacing: 0.04rem;
        `
    },

    'OVERLINE': {
        as: 'span',
        textFormat: css`
            ${FONTS.NORMAL}
            font-size: 1.6rem;
            line-height: 2.4rem;
            letter-spacing: 0.15rem;
            
        `
    },
}

export const TextComponent = styled.span.attrs(({ type }: IText) => ({
    as: typeMapper[type]?.as,
}))<IText>`
    ${({ type }) => typeMapper[type]?.textFormat}
    color: ${({ color }) => color !== undefined ? COLORS[color] : COLORS.PRIMARY_LIGHT}
`;
