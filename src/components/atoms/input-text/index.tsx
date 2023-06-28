import { InputTextComponent } from "./styles";
import { ColorFormat } from "@/global/theme/colors/interfaces";

export interface InputTextInterface {
    type: 'password' | 'text' | 'number' | 'email';
    placeholder: string;
    color?: keyof ColorFormat;
    backgroundColor?: keyof ColorFormat | 'tranparent';
}

function InputText(props: InputTextInterface) {
    return <InputTextComponent {...props} />
}

export default InputText;
