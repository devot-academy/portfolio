import { ColorFormat } from '@/global/theme/colors/interfaces';
import {  IconInterface } from '../../atoms/icon/interfaces'

export interface ButtonInterface {
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: keyof ColorFormat | 'tranparent';
  onClick: () => void;
  isDisabled?: boolean;
  label?: string;
  IconProps?: IconInterface;
}