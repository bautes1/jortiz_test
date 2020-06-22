import React, { useState, useEffect } from "react";
import redditService from "../../services/reddit.services";
import { RedditEntry } from "../../models/Reddit.model";
import Item from './EntryItem';
import * as Styled from './menu.styled';

const ListEntries = ({ onSelectEntry }: { onSelectEntry: (entry: RedditEntry) => void }) => {
  const [entries, setEntries] = useState<RedditEntry[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await redditService.get();
      setEntries(data?.entries);
    };
    fetch();
  }, []);

  return (
    <Styled.List className="pure-u-1">
      {entries.map((entry, idx) => (
        <Item key={idx} entry={entry} onClick={() => onSelectEntry(entry)} />
      ))}
    </Styled.List>
  );
};

export default ListEntries;
