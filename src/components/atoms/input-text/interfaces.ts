import { ColorFormat } from "@/global/theme/colors/interfaces";

export interface InputTextInterface {
    type: 'password' | 'text' | 'number' | 'email';
    placeholder : string;
    color?: keyof ColorFormat;
    backgroundColor?: keyof ColorFormat | 'tranparent';
}


   
    