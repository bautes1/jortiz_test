import React, { useState } from "react";
import Layout, { SideMenu, Content } from "./Layout";
import AllEntries from "./components/entries/AllEntries";
import EntryDescription from "./components/entry-description/EntryDescription";
import { RedditEntry } from "./models/Reddit.model";

function App() {
  const [entry, setEntry] = useState<RedditEntry>();
  return (
    <Layout>
      <>
        <SideMenu>
          <AllEntries onSelectEntry={setEntry} />
        </SideMenu>
        <Content>
          <EntryDescription entry={entry} />
        </Content>
      </>
    </Layout>
  );
}

export default App;
