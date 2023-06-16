import { IconSize, IconColor } from "./styles";

export interface IconInterface {
  name: string;
  size: keyof typeof IconSize;
  color: keyof typeof IconColor;
}