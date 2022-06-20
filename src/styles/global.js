import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        --Color-primary: #FF577F;
        --Color-primary-Focus: #FF427F;
        --Color-primary-Negative: #59323F;
        --Black: #000000;
        --White: #ffffff;
        --GrayDark: #212529;
        --Gray: #343B41;
        --GrayLigth: #F8F9FA;
        --Gray2: #868E96;
        --Gray3: #121214;
        --Negative: #E83F5B;
    }

    body {
        font-family: 'Inter', sans-serif; 
        background: var(--Black)
    }

    button {
        cursor: pointer;
        background: transparent;
        border: 0;
    }

    a {
        text-decoration: none;
    }

    ul, li, ol {
        list-style: none;
    }
`
