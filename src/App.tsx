import React, { useState } from "react";
import Layout from "./layout/Layout";
import { SideMenu, Content } from './layout/Layout.styled';
import ListEntries from "./components/list-entries/ListEntries";
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
