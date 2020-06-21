import React, { useState, useEffect } from "react";
import styled from "styled-components";
import redditService from "../../services/reddit.services";
import { RedditEntry } from "../../models/Reddit.model";

const List = styled.ul``;
const ListItem = styled.li`
  cursor: pointer;
  .pure-menu-link {
    white-space: normal;
  }
`;

const Item = ({
  entry,
  onClick
}: {
  entry: RedditEntry;
  onClick: () => void;
}) => (
  <ListItem className="pure-menu-item">
    <a className="pure-menu-link" onClick={onClick}>{entry.getTitle()}</a>
  </ListItem>
);

const AllEntries = ({ onSelectEntry }: { onSelectEntry: (entry: RedditEntry) => void }) => {
  const [entries, setEntries] = useState<RedditEntry[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await redditService.get();
      setEntries(data?.entries);
    };
    fetch();
  }, []);

  return (
    <List className="pure-menu-list">
      {entries.map((entry, idx) => (
        <Item key={idx} entry={entry} onClick={() => onSelectEntry(entry)} />
      ))}
    </List>
  );
};

export default AllEntries;
