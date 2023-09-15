import React,{ ReactNode }  from "react";

import * as Style from './styles'

import { IText } from "@/components/atoms/Text"; 

export interface ILink {
    url: string;
    children: ReactNode;
    type: IText['type'];
    isLinkedInAnotherPage?: boolean;
}

function Link({ children, url, type, isLinkedInAnotherPage = true }: ILink) {
    return <Style.LinkComponent url={url} isLinkedInAnotherPage={isLinkedInAnotherPage}>
            <Style.TextComponet type={type}>
                {children}
            </Style.TextComponet>
        </ Style.LinkComponent>
}

export default Link;