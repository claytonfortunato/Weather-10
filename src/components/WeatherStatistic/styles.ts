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

  background-color: ${(props) => props.theme.colors.purpletransparent};

  img {
    width: 3.2rem;
    height: 3.2rem;

    display: none;
    grid-area: icon;
    opacity: 0.4;
  }

  p:first-of-type {
    grid-area: type;

    font-size: 1.2rem;
    line-height: 1.4rem;

    text-transform: capitalize;

    color: ${(props) => props.theme.colors.gray100};
  }

  p:last-of-type {
    grid-area: value;

    font-size: 1.7rem;
    line-height: 2.2rem;

    color: ${(props) => props.theme.colors.gray100};

    span {
      font-size: 1.4rem;
      line-height: 1.7rem;
      color: ${(props) => props.theme.colors.gray300};
    }
  }

  @media (min-width: 525px) {
    grid-template-areas: "icon type" "icon value";

    img {
      display: initial;
    }
  }
`;
