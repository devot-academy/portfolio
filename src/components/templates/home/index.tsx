import React from 'react';
import * as Style from './styles';
import { HomeInterface } from './interfaces';
import { TextComponent } from '../../molecules/button/styles';

export default function HomeTemplate(props: HomeInterface) {
  return (
    <Style.Container>
      <Style.Logo />
      <Style.Navbar />
      <Style.Main />
      <TextComponent  type='headline-5'>
       Eu sou Raissa Marques,
       <TextComponent  type='headline-1'>
        REACT <br /> DEVELOP
       <TextComponent type='headline-6'>
       Tenho 24 anos e sou formada em pedagogia. <br /> Realizando,  
       transição para  a area de programação. <br /> Ganhei  experiência em trabalho 
       em equipe nos ultimos 6 meses <br />e estou determinada a me destacar nesse novo
       campo.

       </TextComponent>

       </TextComponent>
       

      </TextComponent>
      
    </Style.Container>
  );
};