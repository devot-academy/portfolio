import React from 'react';

import * as Style from './styles';

import { TextInterface } from './interfaces';

export default function Text (props: TextInterface) {
    return <Style.TextComponent {...props} />
}