import { InputTextInterface } from "./interfaces";

import { InputTextComponent } from "./styles";


function InputText(props: InputTextInterface) {
    return <InputTextComponent {...props} />
}

export default InputText;
