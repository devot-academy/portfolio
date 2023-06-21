import { typeMapper } from './styles';
import { ColorFormat } from '@/global/theme/colors/interfaces';

export interface TextInterface {
    type: keyof typeof typeMapper;
    color?: keyof ColorFormat;
    children: string;
}