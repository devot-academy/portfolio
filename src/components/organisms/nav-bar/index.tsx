import React from 'react';
import * as Style from './styles';
import { IButton } from '../../molecules/button/index'

export interface NavbarInterface {
    AboutButtonProps: IButton;
    ProjectButtonProps: IButton;
    ContactButtonProps: IButton;
    ResumeButtonProps: IButton;
}

export default function Navbar(props: NavbarInterface) {
    return (
        <Style.Container>
            <Style.AboutButtonComponent {...props.AboutButtonProps} backgroundColor='tranparent' />
            <Style.ContactButtonComponent {...props.ContactButtonProps} backgroundColor='tranparent' />
            <Style.ProjectButtonComponent {...props.ProjectButtonProps} backgroundColor='tranparent' />
            <Style.ResumeButtonComponent {...props.ResumeButtonProps} backgroundColor='ACCENTED_LIGHT' />
        </Style.Container>
    )
} 