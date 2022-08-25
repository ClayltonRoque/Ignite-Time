import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
}

body {
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family:  'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;

}

@media (max-width: 1400px) {
    html {
        font-size: 100%;
    }
}

@media (max-width: 1250px) {
    html {
        font-size: 87.5%;
    }
}
 
@media (max-width: 1000px) {
    html {
        font-size: 70%;
    }
}

@media (max-width: 750px) {
    html {
        font-size: 52.5%;
    }
}

@media (max-width: 500px) {
    html {
        font-size: 35%;
    }
}

@media (max-width: 350px) {
    html {
        font-size: 25%;
    }
}
`
