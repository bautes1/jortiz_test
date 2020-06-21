import React from "react";
import styled from "styled-components";

const StyledLayout = styled.div`
  display: flex;
`;

const Layout = ({
  children,
}: {
  children: React.ReactChild;
}) => <StyledLayout>{children}</StyledLayout>;


export const SideMenu = styled.div`
  flex: 3;
`;

export const Content = styled.div`
  flex: 2;
`;

export default Layout;