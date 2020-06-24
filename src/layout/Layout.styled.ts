import styled from "styled-components";
import { device } from "../utils/media";

export const Layout = styled.div`
  display: flex;
`;

export const SideMenu = styled.nav`
  color: white;
  background-color: black;
  max-width: 300px;
`;

export const Content = styled.div`
  display: none; 
  @media ${device.M} {
    display: block;
  }
`;
