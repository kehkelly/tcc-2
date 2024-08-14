import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Montserrat", sans-serif;
    }
    
    main{
        height: calc(100vh - header);
    }

    header {
        box-sizing: content-box;
        background: ${props => props.theme.headerBg};
        display: flex;
    }

    .botao {
        visibility: hidden;
    }

    h2 {
        color: ${props => props.theme.titleColor};
    }

    @media (max-width: 400px) {
        header {
            display: flex;
            justify-content: center;
            align-items: center;
            max-width: 400px;
            
            button {
            background: none;
            border: none;
            }

            .botao {
                visibility: visible;
            }
            

            img {
                margin: auto;
            }

            .navegacao {
                visibility: hidden;
            }

            a {
                
            }
        }

        h2 {
                font-size: 1.25rem;
            }
        

    }
`