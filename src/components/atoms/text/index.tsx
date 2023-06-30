import React, { ReactNode } from 'react';
import * as Style from './styles';

import { typeMapper } from './styles';
import { ColorFormat } from '@/global/theme/colors/interfaces';

export interface IText {
    type: keyof typeof typeMapper;
    color?: keyof ColorFormat;
    children: ReactNode;
}

export default function Text(props: IText) {
    return <Style.TextComponent {...props} />
}