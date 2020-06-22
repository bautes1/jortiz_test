import React from "react";
import * as Styled from "./menu.styled";
import { RedditImageSourceInterface } from "../../models/responses/RedditResponse.model";

const Image = ({ srcImage }: { srcImage?: RedditImageSourceInterface }) => {
  const src = srcImage?.url;
  return <Styled.Image alt={src} src={src} />;
};

export default Image;