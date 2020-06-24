import React from "react";
import * as Styled from './EntryDescription.styled';
import { RedditEntry } from "../../models/Reddit.model";

const EntryDescription = ({ entry }: { entry?: RedditEntry }) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>{entry?.getTitle()}</Styled.Title>
      <ImageSlider images={entry?.getImages()} />
    </Styled.Wrapper>
  );
};

export default EntryDescription;
