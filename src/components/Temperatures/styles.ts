import styled from "styled-components";

export const Container = styled.div`
  color: ${(props) => props.theme.colors.white};

  span {
    color: ${(props) => props.theme.colors.purple100};
  }
`;
