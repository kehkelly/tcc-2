import React, { useState } from 'react'
import IconMenu from "../assets/menu.svg"
import IconHome from "../assets/icon-house.svg"
import Title from "../assets/title-header.svg"

export function Header() {
    const [abrirMenu, setAbrirMenu] = useState(false)

  return (
    <header>
        <section>
          <div className="headerM">
            <div className="botao">
              <button>
                  <img src={ IconMenu } alt="ícone de menu de hamburguer" />
              </button>
            </div>

            <h1>Drink experience</h1>

            <a href="/" className='home'>
                <img src={ IconHome } alt="ícone de casa" />
            </a>
          </div>

          <div className="navegacao">
            <a href="/">Home</a>
            <a href="/historia">História</a>
            <a href="/funcionamento">Funcionamento</a>
            <a href="/comprovacao">Comprovação</a>
            <a href="/componentes">Componentes</a>
            <a href="/sobre-nos">Sobre nós</a>
          </div>

        </section>
    </header>
  )
}
