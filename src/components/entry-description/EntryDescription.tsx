import React from "react";
import styled from "styled-components";
import { RedditEntry } from "../../models/Reddit.model";

const Title = styled.h3``;


const EntryDescription = ({ entry }: { entry?: RedditEntry }) => {
  return <div>
    <Title>{entry?.getTitle()}</Title>
  </div>;
};

export default EntryDescription;
