import React from 'react';
import { IconType } from 'react-icons';
import { IconColor, IconSize, StyledIcon } from './styles';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

// Defina um tipo de união para as opções válidas de 'name'
type IconName = 'email' | 'phone' | 'location' | 'linkedin' | 'github' | 'instagram';

// Interface para as props do componente Icon
export interface IconProps {
  name: IconName;
  size: keyof typeof IconSize;
  color: keyof typeof IconColor;
}

const icons: { [key in IconName]: IconType } = {
  email: FaEnvelope,
  phone: FaPhone,
  location: FaMapMarkerAlt,
  linkedin: FaLinkedin,
  github: FaGithub,
  instagram: FaInstagram
};

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const IconComponent = icons[name];

  if (!IconComponent) return null;

  return (
    <StyledIcon name={name} {...props}>
      <IconComponent />
    </StyledIcon>
  );
};

export default Icon;
