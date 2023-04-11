import { createGlobalStyle } from "styled-components";

import bodyBackground from "../assets/body-background.png";

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
        min-height: 100vh;
        min-width: 37.2rem;
        

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: ${(props) => props.theme.background.purple500};
        color: ${(props) => props.theme.colors.gray300};

        position: relative;

        &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;

            background-image: url(${bodyBackground});
            background-repeat: no-repeat;
            background-size: cover;

            filter: blur(20px);
        }
    }
`;
