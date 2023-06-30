import * as Style from './styles';
import { ColorFormat } from '@/global/theme/colors/interfaces';
import { IIcon } from '../../atoms/icon/index'

export interface IButton {
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: keyof ColorFormat | 'tranparent';
  onClick: () => void;
  isDisabled?: boolean;
  label?: string;
  IconProps?: IIcon;
}

export default function Button(props: IButton) {
  const { label, IconProps } = props;
  return (
    <Style.ButtonComponent {...props}>
      {IconProps && (<Style.IconComponent  {...IconProps} color='white' size="medium" />)}
      {label && (<Style.TextComponent type='BUTTON' >{label}</Style.TextComponent>)}
    </Style.ButtonComponent>)
}