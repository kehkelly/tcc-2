import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Montserrat", sans-serif;
    }

    header {
        box-sizing: border-box;
        background: ${props => props.theme.headerBg};
        display: flex;
    }

    main{
        height: calc(100vh - header);
    }

    h1 {
        font-family: "Alegreya Sans SC", sans-serif;
        font-weight: 400;
        color: ${props => props.theme.titleColor};
    }

    .botao {
        visibility: hidden;
    }

    h2 {
        color: ${props => props.theme.titleColor};
    }

    @media (max-width: 400px) {
        header {
            height: 4.375rem;
            section {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
            }
            
            h1 {
                font-size: 1.5rem;
            }

            button {
                background: none;
                border: none;
                margin-left: 2rem;
            }

            .botao {
                visibility: visible;
            }

            .navegacao {
                visibility: hidden;
            }

            .home {
                margin-left: -3rem;
            }
        }
        
        main {
            padding-inline: 3rem;
            padding-block: 3.125rem;
            display: flex;
            flex-direction: column;
            align-items: center;

            h2 {
                font-size: 1.2rem;
                padding-bottom: 1.5rem;
            }

            h3 {
                font-size: 1rem;
                margin-bottom: -2rem;
                padding-top: 1.5rem;
            }

            p{
                font-size: 1rem;
                font-weight: 500;
                margin-block: 2.5rem;
            }

            a {
                text-decoration: none;
                font-weight: 700;
                color: ${props => props.theme.white};
                background: ${props => props.theme.buttonColor};
                padding-inline: 3.125rem;
                padding-block: 0.6875rem;
                border-radius: 25px;
                margin-bottom: 4rem;
                text-align: center;
            }

            span {
                font-weight: 700;
            }

            .pontos{
                margin-top: 1.5rem;
            }

            .integrante {
                padding-top: 4rem;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }
        
    }
`