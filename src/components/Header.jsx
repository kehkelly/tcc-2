import React, { useState } from 'react'
import IconMenu from "../assets/menu.svg"
import IconHome from "../assets/icon-house.svg"
import { Link } from 'react-router-dom'

export function Header() {
    const [abrirMenu, setAbrirMenu] = useState(false)

  return (
    <header>
        <section>
            <div className="botao">
            <button>
              <img src={ IconMenu } alt="ícone de menu de hamburguer" />
            </button>
          </div>

          <h1>Drink experience</h1>

          <div className="navegacao">
            <Link to="/">Home</Link>
            <Link to="/historia">História</Link>
            <Link to="/funcionamento">Funcionamento</Link>
            <Link to="/comprovacao">Comprovação</Link>
            <Link to="/componentes">Componentes</Link>
            <Link to="/sobre-nos">Sobre nós</Link>
          </div>

          <Link to="/" className='home'>
            <img src={IconHome} alt="ícone de casa" />
          </Link>
        </section>
    </header>
  )
}
