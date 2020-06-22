import styled from "styled-components";
import { device } from "../../utils/media";

export const Image = styled.img`
  display: block;
  margin: 0 auto 10px;
  max-width: 200px;
  max-height: 200px;
  @media ${device.S} {
    margin: 0 10px;
  }
`;
