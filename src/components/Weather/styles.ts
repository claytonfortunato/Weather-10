import background from "../../assets/background.png";
import cloud from "../../assets/icon/color-cloudy.svg";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;

    top: 0;
    left: 0;
    height: 480px;
    width: 480px;

    background-image: url(${background});
    background-size: cover;
    background-position: bottom right;
    border-radius: 1rem;
  }
`;
