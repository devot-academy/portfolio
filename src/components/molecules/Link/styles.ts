import styled from 'styled-components';

import { LinkInterface } from "./interfaces"; 

export const LinkComponent = styled.a.attrs(({ url }:LinkInterface)=>({
    href: url
}))<LinkInterface>``;