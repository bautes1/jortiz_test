import styled from "styled-components";
import { device } from "../utils/media";

export const Layout = styled.div`
  @media ${device.M} {
    display: flex;
  }
`;

export const SideMenu = styled.div`
  @media ${device.M} {
    flex: 1;
  }
`;

export const Content = styled.div`
  flex: 2;
  display: none; 
  @media ${device.M} {
    display: block;
  }
`;
