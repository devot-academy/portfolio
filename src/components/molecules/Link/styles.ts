import styled from 'styled-components';

import Text from '@/components/atoms/Text';

import { ILink } from "."; 

export const LinkComponent = styled.a.attrs(({ url, isLinkedInAnotherPage }: ILink)=>({
    href: url,
    target: isLinkedInAnotherPage ? '_blank' : '_self',
}))<{ url: string; isLinkedInAnotherPage: boolean; }>`
    text-decoration: none;
    &:hover {
        text-decoration: underline;
        color: ${({ theme }) => theme.COLORS.LABEL}
    }
`;

export const TextComponet = styled(Text).attrs({ 
    color: 'LABEL',
})``;

