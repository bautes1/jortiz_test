import React from "react";
import { RedditEntry } from "../../models/Reddit.model";
import Image from "../image/Image";
import * as Styled from "./EntryItem.styled";

const Item = ({
  entry,
  onClick,
}: {
  entry: RedditEntry;
  onClick: () => void;
}) => (
  <Styled.ListItem>
    <Image srcImage={entry.getDefaultImage()} />
    <Styled.Description onClick={onClick}>
      <Styled.Title>
        {entry.getTitle()}
        <Styled.Name>{entry.response?.author_fullname}</Styled.Name>
      </Styled.Title>
      <Styled.Small>
        <Styled.DelIcon />
        {entry.getTimePassed()} ago - {entry.getNumberOfComments()} comments
      </Styled.Small>
    </Styled.Description>
  </Styled.ListItem>
);

export default Item;
