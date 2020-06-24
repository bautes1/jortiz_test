import React, { useEffect } from "react";
import redditService from "../../services/reddit.services";
import { RedditEntry } from "../../models/Reddit.model";
import Item from "../entry-item/EntryItem";
import useLocalStorage from "../../hooks/useStorage";

import * as Styled from "./EntryTiles.styled";

const EntryTiles = ({
  onSelectEntry,
}: {
  onSelectEntry: (entry: RedditEntry) => void;
}) => {
  const [entries, setEntries] = useLocalStorage([]);

  useEffect(() => {
    const fetchEntries = async () => {
      const data = await redditService.get();
      // @ts-ignore
      setEntries(data?.entries || []);
    };
    if (!entries.length) fetchEntries();
  }, [entries, setEntries]);

  const handleDismiss = (entry: RedditEntry) => {
    const idx = entries.findIndex((i) => i.response?.id === entry.response?.id);
    if (idx === -1) return;
    const copiedEntries = entries.slice();
    copiedEntries.splice(idx, 1, entry.setDismissed(true))
    setEntries(copiedEntries);
  };

  const handleNextPage = () => {
    const fetchMoreEntries = async (lastId?: string) => {
      const data = await redditService.get(lastId);
      // @ts-ignore
      setEntries(entries.concat(data?.entries || []));
    };
    const lastEntry = entries.slice(-1)[0];
    fetchMoreEntries(lastEntry?.response?.id);
  };

  return (
    <>
      <Styled.List>
        {entries
          .filter((entry) => entry.notDismissed())
          .map((entry, idx) => (
            <Item
              key={idx}
              entry={entry}
              onClick={() => onSelectEntry(entry)}
              onDismiss={() => handleDismiss(entry)}
            />
          ))}
      </Styled.List>
      <div onClick={handleNextPage}>next 10</div>
    </>
  );
};

export default EntryTiles;
