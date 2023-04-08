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

export const ContainerTemp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;

  font-size: 2rem;
  line-height: 2.4rem;

  span {
    position: relative;

    font-size: 8.8rem;
    line-height: 10.6rem;
    color: ${(props) => props.theme.colors.white};

    &::before {
      content: "°C";
      display: block;

      position: absolute;
      top: 2.9rem;
      right: -3rem;

      font-size: 2.4rem;
      line-height: 2.9px;
      color: ${(props) => props.theme.colors.gray300};
    }
  }
`;

export const StatisticsContainer = styled.ul`
  margin-top: auto;

  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
