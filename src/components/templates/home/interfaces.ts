import { ImageInterface } from "@/components/atoms/Image/interfaces";
import { IText } from "@/components/atoms/Text";
import { ButtonInterface } from "@/components/molecules/button/interfaces";

export interface HomeInterface {
  ButtonProps?: ButtonInterface;
  ImageProps?: ImageInterface;
  TextProps?: IText;
}