import React, { useEffect, useState } from "react";
import redditService from "../../services/reddit.services";
import { RedditEntry } from "../../models/Reddit.model";
import Item from "../entry-item/EntryItem";
import useLocalStorage from "../../hooks/useStorage";
import useScrollAtBottom from "../../hooks/useScrollAtBottom";

import * as Styled from "./EntryTiles.styled";

const EntryTiles = ({
  onSelectEntry,
}: {
  onSelectEntry: (entry: RedditEntry) => void;
}) => {
  const isBottomReached = useScrollAtBottom();
  const [entries, setEntries] = useLocalStorage([]);
  const [lastEntry, setLastEntry] = useState<RedditEntry>();

  useEffect(() => {
    const fetchMoreEntries = async (id: string) => {
      const data = await redditService.get(id);
      setLastEntry(data.entries.slice(-1)[0]);
      setEntries(entries.concat(data?.entries || []));
    };

    if (isBottomReached) fetchMoreEntries(lastEntry?.getId() || "");
  }, [isBottomReached, entries, setLastEntry, lastEntry, setEntries]);

  useEffect(() => {
    const fetchEntries = async () => {
      const data = await redditService.get();
      setLastEntry(data.entries.slice(-1)[0]);
      setEntries(data?.entries || []);
    };
    if (!entries.length) fetchEntries();
  }, [entries.length, setEntries, setLastEntry]);

  const handleSelectedEntry = (entry: RedditEntry) => {
    const idx = entries.findIndex((i) => i.response?.id === entry.response?.id);
    if (idx === -1) return;
    const copiedEntries = entries.slice();
    copiedEntries.splice(idx, 1, entry.setSeen());
    setEntries(copiedEntries);
    onSelectEntry(entry);
  };

  const handleDismiss = (entry: RedditEntry) => {
    const idx = entries.findIndex((i) => i.response?.id === entry.response?.id);
    if (idx === -1) return;
    const copiedEntries = entries.slice();
    copiedEntries.splice(idx, 1, entry.setDismissed(true));
    setEntries(copiedEntries);
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
              disabled={entry.alreadyseen}
              onClick={() => handleSelectedEntry(entry)}
              onDismiss={() => handleDismiss(entry)}
            />
          ))}
      </Styled.List>
      <Styled.Bottom role="link" onClick={() => setEntries([])}>
        Dismiss All
      </Styled.Bottom>
    </>
  );
};

export default EntryTiles;
