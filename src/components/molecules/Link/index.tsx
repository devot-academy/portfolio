import React from "react";

import { LinkInterface } from './interfaces';

import { LinkComponent } from './styles'


function Link(props: LinkInterface) {
    return <LinkComponent {...props} />

}

export default Link;