import React from "react";
import { RedditImageSourceInterface } from "../../models/responses/RedditResponse.model";

interface Props {
  srcImage?: RedditImageSourceInterface;
  className?: string;
}

const Image = ({ srcImage, className }: Props) => {
  const src = (srcImage?.url || "").replace(/&amp;/g, "&");
  return src ? <img className={className} alt={src} src={src} /> : null;
};

export default Image;