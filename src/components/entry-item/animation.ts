import { css } from "styled-components";

export const animation = css`
  @keyframes removed-item-animation {
    0% {
      opacity: 1;
      transform: translateX(0);
    }

    80% {
      opacity: 1;
      transform: translateX(-800px);
    }

    100% {
      opacity: 0;
      transform: translateX(-800px);
    }
  }

  @keyframes disable-item-animation {
    0% {
      background-color: rgba(777, 777, 777, 0.3);
    }

    50% {
      background-color: rgba(777, 777, 777, 1);
    }

    100% {
      background-color: rgba(777, 777, 777, 0.1);
    }
  }
`;

export const removeItem = css`
  animation: removed-item-animation 0.8s cubic-bezier(0.65, -0.02, 0.72, 0.29);
`;

export const disabledItem = css`
  animation: disable-item-animation 0.8s linear;
  opacity: 0.3;
`;
