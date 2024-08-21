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
        display: flex;
    }

    main{
        

        
        
    }

    .botao {
        visibility: hidden;
    }

    h2 {
        
    }

    h5 {
        
    }

    @media (max-width: 400px) {
        header {
            height: 4.375rem;
            overflow: hidden;
            section {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
            }

            div {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: 2rem;
            }
            
            h1 {
                font-size: 1.5rem;
                font-family: "Alegreya Sans SC", sans-serif;
                font-weight: 400;
                color: ${props => props.theme.titleColor};
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
                display: none;
            }
        }
        
        main {
            height: calc(100vh - header);
            margin-inline: 1.5rem;
            padding-block: 3.125rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: left;

            h2 {
                font-size: 1.2rem;
                padding-bottom: 1.5rem;
                color: ${props => props.theme.titleColor};
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

            .imagem {
                width: 14,25rem;
                height: 10,875rem;
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

            .pontos{
                margin-top: 1.5rem;
            }

            .integrante {
                padding-top: 4rem;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            span {
                font-weight: 700;
            }
        }

        footer {
            display: flex;
            flex-direction: column;
            padding-inline: 1.5rem;
            background: ${props => props.theme.footerBg};
            height: 18.0625rem;

            h4 {
                font-size: 1.0625rem;
                margin-top: 2rem;
            }

            h5{
                font-size: 0.9375rem;
                font-family: "Alegreya Sans SC", sans-serif;
                font-weight: 400;
                color: ${props => props.theme.white};
            }
        }
        
    }
`