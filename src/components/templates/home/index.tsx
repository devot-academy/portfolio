import React from 'react';
import * as Style from './styles';
import Home from '../../../pages/index';
import Text from '@/components/atoms/Text';



interface Home {
  presentation: string;
  message: string;
  text: string;
}

export default function HomeTemplate({presentation, message, text }: Home){
  return (
    <Style.Container>
     
     <Style.Container>
      <Style.presentation type='headline-6'>
        {presentation}
     </Style.presentation>
      <Style.message type='headline-1'>
        {message}
      </Style.message>
      <Style.text type='headline-5'>
        {text}
      </Style.text>
     </Style.Container>
    
    </Style.Container>
  );
};