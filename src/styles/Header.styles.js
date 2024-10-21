import styled from "styled-components"
export const MenuMobile = styled.div`
    height: 4.375rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    &::before {
        content: "";
        width: 100vw;
        height: calc(100vh - 6rem);
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.4);
        display: none;
    }

    h1 {
        font-size: 1.5rem;
        font-family: "Alegreya Sans SC", sans-serif;
        font-weight: 400;
        color: ${props => props.theme.titleColor};
        margin-inline: 1rem;
    }

    .botao {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }
    nav {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 20rem;
        position: fixed;
        height: calc(100vh - 6rem);
        top: 0;
        left: ${props => props.abrir ? "0" : "-20rem"};
        text-align: center;
        transition: .6s;
        background: ${props => props.theme.menuBg};
        
        div {
            display: flex;
            align-items: center;
            padding-top: 1rem;
            padding-left: 1.85rem;
        }

        h1 {
            color: ${props => props.theme.white};
            text-align: left;
            font-size: 1.75rem;
            margin-top: 0;
            margin-left: 0;
            background: none;
        }

        .link {
            color: ${props => props.theme.white};
            text-decoration: none;
            font-weight: 500;
            text-align: left;
            padding-left: 2rem;
            padding-bottom: 1.5rem;
            border-bottom: 2px ${props => props.theme.white} solid;
        }

        .home {
            color: white;
        }
    }

    @media (min-width:400px){
        background: ${props => props.theme.white};
        position: fixed;
        top: 0;
        width: 100%;

        header {
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
           
            .botao {
                display: none;
            }

            h1 {
                font-size: 2.5rem;
                color: ${props => props.theme.titleColor};
                display: flex;
                justify-content: center;
                font-weight: 500;
                padding: 0;
                margin: 0;
            }

            nav {
                height: 100%;
                display: flex;
                border: none;
                position: initial;
                flex-direction: row;
                font-size: 1.125rem;
                font-weight: 700;
                gap: 3rem;
                width: 100%;
                background: none;
                button {
                    display: none;
                }
            }

            .link {
                text-decoration: none;
                color: ${props => props.theme.titleColor};
                white-space: nowrap;
                border: none;
                display: flex;
                align-items: center;
                font-weight: 600;
                padding: 0;
                margin: 0;
            }

            div {
                padding-left: 0;
                padding-top: 0;
            }

            .link:hover {
                color: ${props => props.theme.hoverBg};
            }

            .home {
                display: flex;
                align-items: center;
                color: ${props => props.theme.titleColor};
            }
        }
    }
`