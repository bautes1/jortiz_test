import styled, { css } from "styled-components";
import { animation, removeItem, disabledItem } from "./animation";
import BaseImage from "../image/Image";

const blueBullet = css`
  content: "";
  border-radius: 100%;
  width: 10px;
  height: 10px;
  background-color: var(--bullet-color);
  display: inline-block;
  margin-right: 10px;
`;

const rigthArrow = css`
  content: "";
  border: solid white;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 0;
  transform: rotate(-45deg);
  width: 7px;
  height: 7px;
  flex-shrink: 0;
  margin: auto 0;
  margin-left: auto;
  margin-right: 10px;
`;

export const Wrapper = styled.div`
  border-bottom: 1px solid rgba(777, 777, 777, 0.5);
`;

export const ListItem = styled.li<{ disabled?: boolean; dismissed?: boolean }>`
  --bullet-color: ${(props) => (props.disabled ? "transparent" : "blue")};
  ${animation};

  padding: 0.25rem 0.5rem;
  cursor: default;
  ${(props) => props.disabled && disabledItem};
  ${(props) => props.dismissed && removeItem};
`;

export const Description = styled.div`
  display: flex;
  &:after {
    ${rigthArrow};
  }
`;

export const Subject = styled.h4`
  margin: 0;
`;

export const Name = styled.h4`
  &:before {
    ${blueBullet};
  }
  margin: 0 0 10px;
  font-weight: normal;
  small {
    padding-left: 10px;
  }
`;

export const Title = styled.small`
  padding-left: 10px;
  margin: auto 0;
`;

export const Footer = styled.small`
  color: darkgoldenrod;
  display: flex;
  justify-content: space-between;
  margin: 15px 0 5px;
  white-space: nowrap;
`;

export const Comments = styled.span`
  padding-right: 20px;
`;

export const DeleteLink = styled.span`
  cursor: pointer;
  color: white;
`;

export const DeleteIcon = styled.span`
  &:before {
    content: "X";
    color: darkgoldenrod;
    border: 2px solid darkgoldenrod;
    border-radius: 100%;
    flex-shrink: 0;
    width: 15px;
    height: 15px;
  }
  text-align: center;
  font-weight: bold;
  display: inline-flex;
`;

export const Image = styled(BaseImage)`
  display: block;
  max-width: 70px;
`;
