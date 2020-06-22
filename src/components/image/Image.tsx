import React from "react";
import * as Styled from "./Image.styled";
import { RedditImageSourceInterface } from "../../models/responses/RedditResponse.model";

const Image = ({ srcImage }: { srcImage?: RedditImageSourceInterface }) => {
  const src = srcImage?.url;
  return src ? <Styled.Image alt={src} src={src} /> : null;
};

export default Image;