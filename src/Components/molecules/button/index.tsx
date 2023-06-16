import * as Style from './styles';

import { ButtonInterface } from './interfaces';

export default function Button (props: ButtonInterface) {
    const { label, IconProps } = props;
    return (
      <Style.ButtonComponent {...props}>
        {IconProps && (<Style.IconComponent  {...IconProps} color='white' size="medium"/>)}
        {label && (<Style.TextComponent type='BUTTON' >{label}</Style.TextComponent>)}
      </Style.ButtonComponent>)
}