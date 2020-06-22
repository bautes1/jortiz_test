import React from "react";
import * as Styled from './Layout.styled';

const Layout = ({
  children,
}: {
  children: React.ReactChild;
}) => <Styled.Layout>{children}</Styled.Layout>;

export default Layout;