import { useState } from "react";
import { RedditEntry } from "../models/Reddit.model";
import { RedditEntryInterface } from "../models/responses/RedditResponse.model";

interface RedditStoredValue {
  response: RedditEntryInterface;
}

function useLocalStorage(
  initialValue: RedditEntry[]
): [RedditEntry[], (items: RedditEntry[]) => void] {
  const key = "RedditEntries";

  const fetchItems = () => {
    try {
      const item = window.localStorage.getItem(key);
      const items = item ? JSON.parse(item) : initialValue;
      return items.map((entry: RedditStoredValue) =>
        RedditEntry.fromJSON(entry)
      );
    } catch (error) {
      return initialValue;
    }
  };

  const [storedValues, setStoredValues] = useState(fetchItems);

  const setValues = (items: RedditEntry[]) => {
    try {
      setStoredValues(items);
      window.localStorage.setItem(key, JSON.stringify(items));
    } catch (error) {}
  };

  return [storedValues, setValues];
}

export default useLocalStorage;
