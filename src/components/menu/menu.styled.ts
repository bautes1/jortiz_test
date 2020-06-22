import styled, { css } from "styled-components";
import { device } from "../../utils/media";

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const selectedItem = css`
  background: #eee;
`;

export const ListItem = styled.li<{ selected?: boolean }>`
  cursor: pointer;
  padding: 0.9em 1em;
  border-bottom: 1px solid #ddd;
  border-left: 6px solid transparent;
  &:hover {
    ${selectedItem};
  }
  ${(props) => props.selected && selectedItem}

  @media ${device.S} { 
    display: flex;
  }
`;

export const Subject = styled.h4`
  margin: 0;
`;

export const Name = styled.h5`
  text-transform: uppercase;
  color: #999;
  margin: 0;
`;

export const Image = styled.img`
  max-width: 200px;
  max-height: 200px;
  @media ${device.S} { 
    margin: 0 20px;
  }
`;
