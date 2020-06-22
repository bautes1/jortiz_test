import React from "react";
import { RedditEntry } from "../../models/Reddit.model";
import Image from './Image';
import * as Styled from "./menu.styled";

const Item = ({
  entry,
  onClick,
}: {
  entry: RedditEntry;
  onClick: () => void;
}) => (
  <Styled.ListItem>
    <Image srcImage={entry.getDefaultImage()} />
    <div className="pure-u-3-4" onClick={onClick}>
      <Styled.Name>
        {entry.response?.author_fullname}
      </Styled.Name>
      <span>{entry.getTitle()}</span>
    </div>
  </Styled.ListItem>
);

export default Item;
