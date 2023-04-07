import styled from "styled-components";

export const Container = styled.div`
  margin-right: 2rem;
  padding: 0.4rem 0.8rem 0.4rem 0.4rem;
  border-radius: 6px;
  align-self: flex-end;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  background-color: ${(props) => props.theme.colors.white};
  cursor: pointer;

  img {
    height: 2rem;
    width: 2rem;
  }

  p {
    font-size: 1.4rem;
    line-height: 1.7rem;

    color: ${(props) => props.theme.colors.purple100};
  }

  @media (min-width: 914px) {
    padding: 0;
    background-color: inherit;
  }
`;
