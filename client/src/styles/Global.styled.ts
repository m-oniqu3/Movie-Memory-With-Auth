import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Didact Gothic", sans-serif;
  }

  :root {
    --primary-neutral: #ffffff;
    --primary-neutral-dark: #dce1de;
    --primary: #3b5249;
    --primary-medium: #293a33;
    --primary-light: #dceddd;

    --heading: "Montserrat", sans-serif;
  }
`;
