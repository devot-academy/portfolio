import { ImageInterface } from "@/components/atoms/Image/interfaces";
import { TextInterface } from "@/components/atoms/Text/interfaces";
import { ButtonInterface } from "@/components/molecules/button/interfaces";

export interface HomeInterface {
  ButtonProps?: ButtonInterface;
  ImageProps?: ImageInterface;
  TextProps?: TextInterface
}