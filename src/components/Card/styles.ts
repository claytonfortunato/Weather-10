import styled from "styled-components";

const PaddingSizes = {
  sm: "1.2rem",
  md: "1.6rem",
  lg: "3.2rem",
  xlg: "4rem",
} as const;

interface ContainerProps {
  padding?: keyof typeof PaddingSizes;
  gridArea: string;
}

export const Container = styled.div<ContainerProps>`
  min-width: 27.7rem;
`;
