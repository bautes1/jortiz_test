import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { RedditImageInterface } from "../../models/responses/RedditResponse.model";

interface Props {
  images?: RedditImageInterface[];
}

const ImageSlider = ({ images = [] }: Props) => {
  const srcs = images.map((img) => img.source);
  console.log(srcs);
  return <SimpleImageSlider width={"896"} height={"504"} images={srcs} />;
};

export default ImageSlider;
