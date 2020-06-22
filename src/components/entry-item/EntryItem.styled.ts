import styled, { css } from "styled-components";
import { device } from "../../utils/media";
import { DeleteIcon } from "../icons/Icon";

const selectedItem = css`
  background: #eee;
`;

export const ListItem = styled.li<{ selected?: boolean }>`
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

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`;

export const Subject = styled.h4`
  margin: 0;
`;

export const Name = styled.h5`
  cursor: pointer;
  text-transform: uppercase;
  color: #999;
  margin: 0;
  &:hover {
    text-decoration: none;
  }
`;

export const Small = styled.small`
  display: block;
  white-space: nowrap;
`;

export const Title = styled.strong`
  &:hover {
    text-decoration: underline;
  }
`;

export const DelIcon = styled(DeleteIcon)`
  cursor: pointer;
  max-width: 20px;
  vertical-align: middle;
  margin: 0 5px;
`;
