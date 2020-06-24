import React from "react";
import * as Styled from "./EntryDescription.styled";
import { RedditEntry } from "../../models/Reddit.model";

const EntryDescription = ({ entry }: { entry?: RedditEntry }) => {
  const src = entry?.getImages()[0].source;

  return (
    entry ?
    <Styled.Wrapper>
      <Styled.Name>{entry.response?.author_fullname}</Styled.Name>
      {src ? <Styled.Image srcImage={src} /> : null}
      <Styled.Title>{entry.getTitle()}</Styled.Title>
    </Styled.Wrapper> :
    <Styled.Dummy />
  );
};

export default EntryDescription;
