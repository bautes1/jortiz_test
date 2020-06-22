import React, { useState } from "react";
import Layout, { SideMenu, Content } from "./Layout";
import ListEntries from "./components/menu/ListEntries";
import EntryDescription from "./components/entry-description/EntryDescription";
import { RedditEntry } from "./models/Reddit.model";

function App() {
  const [entry, setEntry] = useState<RedditEntry>();
  return (
    <Layout>
      <>
        <SideMenu>
          <ListEntries onSelectEntry={setEntry} />
        </SideMenu>
        <Content>
          <EntryDescription entry={entry} />
        </Content>
      </>
    </Layout>
  );
}

export default App;
