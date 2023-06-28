import { IconType } from 'react-icons';
import { StyledIcon } from './styles';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { IconSize, IconColor } from "./styles";

export interface IconInterface {
  name: string;
  size: keyof typeof IconSize;
  color: keyof typeof IconColor;
}

const icons: { [key: string]: IconType } = {
  email: FaEnvelope,
  phone: FaPhone,
  location: FaMapMarkerAlt,
  linkedin: FaLinkedin,
  github: FaGithub,
  instagram: FaInstagram
};

const Icon = ({ name, ...props }: IconInterface) => {
  const Icon = icons[name];

  if (!Icon) return null;

  return (
    <StyledIcon name={name} {...props}>
      <Icon />
    </StyledIcon>
  );
};

export default Icon;
