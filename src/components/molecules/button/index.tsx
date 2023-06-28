import * as Style from './styles';
import { ColorFormat } from '@/global/theme/colors/interfaces';
import { IconInterface } from '../../atoms/icon/index'

export interface ButtonInterface {
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: keyof ColorFormat | 'tranparent';
  onClick: () => void;
  isDisabled?: boolean;
  label?: string;
  IconProps?: IconInterface;
}

export default function Button(props: ButtonInterface) {
  const { label, IconProps } = props;
  return (
    <Style.ButtonComponent {...props}>
      {IconProps && (<Style.IconComponent  {...IconProps} color='white' size="medium" />)}
      {label && (<Style.TextComponent type='BUTTON' >{label}</Style.TextComponent>)}
    </Style.ButtonComponent>)
}