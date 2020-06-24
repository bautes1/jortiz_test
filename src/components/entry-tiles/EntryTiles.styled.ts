import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 40px;
`;

export const Bottom = styled.div`
  cursor: pointer;
  position: fixed;
  bottom: 0;
  max-width: inherit;
  width: 100%;
  background-color: black;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  color: darkgoldenrod;
  &:hover {
    text-decoration: underline;
  }
`;
