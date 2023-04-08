import styled from "styled-components";

export const Container = styled.li`
  width: 14.7rem;
  flex-grow: 1;

  padding: 1.2rem 1.6rem;
  border-radius: 6px;

  display: grid;
  grid-template-areas: "type" "value";
  justify-content: left;
  align-items: center;
  column-gap: 1.2rem;
`;
