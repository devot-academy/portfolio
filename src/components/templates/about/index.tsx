import React from 'react';
import * as Style from './styles';

interface Props {
  About: string;
  header: string;
}

export default function AboutTemplate({
  About,
  header,
}: Props) {
  return (
    <Style.Container>
      <Style.About type='headline-3'>
      </Style.About>
      <Style.ContenteMain>
        <Style.Image />
        <Style.ContenteBoxText>
          <Style.ContenteText>
            <Style.HeaderText children='' type='headline-5' />
            <Style.BodyText children='' type='Body-1' />
          </Style.ContenteText>
          <Style.ContenteText>
            <Style.HeaderText children='' type='headline-5' />
            <Style.BodyText children='' type='Body-1' />
          </Style.ContenteText>
        </Style.ContenteBoxText>
      </Style.ContenteMain>
    </Style.Container>
  );
}