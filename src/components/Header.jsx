import React, { useState } from 'react'
import { Menu } from "../components/Menu.jsx"
import IconMenu from "../assets/menu.svg"
import IconHome from "../assets/icon-house.svg"

export function Header() {
    const [abrirMenu, setAbrirMenu] = useState(false)

    function menu(){
        setAbrirMenu(true)
    }

  return (
    <header>
        <div>
            <nav class={abrirMenu === true? "open":"menu"}>
                <Menu />
            </nav>
            <button onClick={menu}>
                <img src={ IconMenu } alt="ícone de menu de hamburguer" />
            </button>
        </div>

        <h1>Drink experience</h1>

        <a href="../pages/Home.jsx">
            <img src={ IconHome } alt="ícone de casa" />
        </a>
    </header>
  )
}
