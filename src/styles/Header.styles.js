import styled from "styled-components"
export const MenuMobile = styled.div`
    height: 4.375rem;
    padding-top: 2rem;
    display: flex;
    justify-content: center;
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
        margin-top: -2.45rem;
        margin-inline: 1rem;
        padding-left: 2rem;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }
    nav {
        display: flex;
        flex-direction: column;
        padding-top: 2rem;
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
        }

        h1 {
            color: ${props => props.theme.white};
            text-align: left;
            padding-left: 2rem;
            font-size: 1.75rem;
            margin-top: 0;
            margin-left: 0;
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
    }

    @media (min-width:400px){
        header {
            box-sizing: border-box;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            .botao {
                display: none;
            }

            h1 {
                font-size: 2.25rem;
                padding-right: 13rem;
                margin-left: -2rem;
            }

            nav {
                left: 0;
                display: flex;
                border: none;
                flex-direction: row;
                font-size: 1.125rem;
                font-weight: 700;
                gap: 1.5rem;
                button {
                    display: none;
                }
            }

            .link {
                text-decoration: none;
                color: ${props => props.theme.titleColor};
            }

            .link:hover {
                color: ${props => props.theme.hoverBg};
            }

            .home {
                margin-left: 2rem;
            }
        }
    }
`