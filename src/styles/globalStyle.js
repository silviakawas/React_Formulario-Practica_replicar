import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }

    body{
        font-family: sans-serif;
        height: 100vh;
        background-color: #FF7979;
        background-image: url(./public/bg-intro-desktop.png);
    }
`;

export {GlobalStyle};