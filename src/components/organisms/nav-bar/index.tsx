import React from 'react';

import * as Style from './styles';

import { NavbarInterface  } from './interfaces';

export default function Navbar (props: NavbarInterface) {
    return (
        <Style.Container>
            <Style.AboutButtonComponent {...props.AboutButtonProps} backgroundColor='tranparent'/>
            <Style.ContactButtonComponent {...props.ContactButtonProps} backgroundColor='tranparent'/>
            <Style.ProjectButtonComponent {...props.ProjectButtonProps} backgroundColor='tranparent'/>
            <Style.ResumeButtonComponent {...props.ResumeButtonProps} backgroundColor='ACCENTED_LIGHT'/>
        </Style.Container>
    )
} 