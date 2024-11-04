import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Montserrat", sans-serif;
    }
        
    main {
        width: 100%;
        padding-inline: 1.5rem;
        padding-block: 3.125rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: left;
        margin-top: 3rem;

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

        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .imagem {
            width: 14.25rem;
            margin-block: 1.25rem;
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

        iframe {
            width: 300px;
            height: 155px;
            margin-block: 1.5rem;
        }
    }

    footer {
        background: ${props => props.theme.footerBg};

        h5{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 0.9375rem;
            font-family: "Alegreya Sans SC", sans-serif;
            font-weight: 400;
            padding-block: 3rem;
        }

    }

    @media (min-width:400px){
        main{
            width: 100%;
            h2 {
                font-size: 2rem;
                color: ${props => props.theme.titleColor};
                margin-top: 3rem;
                width: 30.56rem;
                text-align: left;
                margin-bottom: 2rem;
                margin-left: -36rem;
                margin-top: -0.75rem;
            }

            .sectionGeral {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                h2 {
                    justify-content: center;
                }
                .curta {
                    padding-bottom: 4rem;
                }

                img {
                    margin-block: 2.125rem;
                }
            }

            p {
                width: 67rem;
                font-size: 1.25rem;
                margin-top: 3rem;
                margin-bottom: 3.75rem;
            }

            a {
                text-decoration: none;
                background: ${props => props.theme.titleColor};
                color: ${props => props.theme.white};
                padding: 1rem 2rem;
                border-radius: 25px;
                font-weight: 600;
            }

            a:hover {
                background: ${props => props.theme.hoverBg};
                color: ${props => props.theme.titleColor};
                font-weight: 700;
            }

            .divFunciona {
                display: flex;
                flex-direction: row;
                gap: 5rem;
                padding-bottom: 6rem;

                .pontos {
                    margin-top: -24rem;
                }

                div {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                p {
                    width: 24rem;
                    text-align: center;
                }
            }

            .bluetooth {
                display: flex;
                flex-direction: column;
                align-items: center;
                img {
                    margin-bottom: 5rem;
                }
            }

            .div_sobreNos {
                display: flex;
                justify-content: left;
                align-items: center;
                gap: 3rem;
                margin-top: 4.5rem;
                margin-bottom: 10rem;
                margin-left: -4rem;

                .p_sobreNos {
                    margin-left: -10rem;
                }

                .integrante {
                    width: 27rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .fotoI {
                    width: 12rem;
                }

                h3 {
                    margin-top: 2rem;
                }
                
                p {
                    width: 20rem;
                    text-align: center;
                }
            }

            .imagem {
                width: 25rem;
                display: flex;
                justify-content: center;
            }

            iframe {
                width: 900px;
                height: 655px;
                padding-block: 3rem;
            }
        }

        footer {
            background: ${props => props.theme.footerBg};
            h5 {
                padding-top: 3rem;
                padding-bottom: 3rem;
                font-weight: 500;
            }
        }
    }
`