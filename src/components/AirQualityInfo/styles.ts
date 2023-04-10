import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;

  span:first-child {
    font-size: 1.4rem;
    line-height: 1.7rem;
    color: ${(props) => props.theme.colors.green100};
  }

  span:last-child {
    font-size: 1.2rem;
    line-height: 1.4rem;
    color: ${(props) => props.theme.colors.gray100};
  }
`;
