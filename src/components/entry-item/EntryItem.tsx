import React, { MouseEvent } from "react";
import { RedditEntry } from "../../models/Reddit.model";
import * as Styled from "./EntryItem.styled";

interface Props {
  disabled?: boolean;
  entry: RedditEntry;
  onClick: () => void;
  onDismiss: () => void;
}

const Item = ({ entry, onClick, onDismiss, disabled }: Props) => {
  const handleDismiss = (ev: MouseEvent<HTMLSpanElement>) => {
    ev.stopPropagation();
    onDismiss();
  };
  return (
    <Styled.ListItem disabled={disabled} onClick={onClick}>
      <Styled.Wrapper>
        <Styled.Name>
          {entry.response?.author_fullname}
          <small>{entry.getTimePassed()} ago</small>
        </Styled.Name>
        <Styled.Description>
          <Styled.Image srcImage={entry.getDefaultImage()} />
          <Styled.Title>{entry.getTitle()}</Styled.Title>
        </Styled.Description>
        <Styled.Footer>
          <Styled.DeleteLink role="link" onClick={handleDismiss}>
            <Styled.DeleteIcon /> Dismiss Post
          </Styled.DeleteLink>
          <Styled.Comments>
            {entry.getNumberOfComments()} comments
          </Styled.Comments>
        </Styled.Footer>
      </Styled.Wrapper>
    </Styled.ListItem>
  );
};

export default Item;
