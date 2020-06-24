import styled from "styled-components";
import ImageComponent from "../image/Image";

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100vh;
`;

export const Name = styled.h3`
  margin: 5px auto;
  text-transform: uppercase;
`;

export const Title = styled.p`
  margin: 5px auto;
`;

export const Image = styled(ImageComponent)`
  margin: 0 auto;
  max-height: calc(100vh - 50%);
`;

export const Dummy = styled.div`
  width: 100%;
  height: 10%;
  background-color: darkgray;
`;
