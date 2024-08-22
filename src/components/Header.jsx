import React, { useState } from 'react'
import IconMenu from "../assets/menu.svg"
import IconHome from "../assets/icon-house.svg"
import { Link } from 'react-router-dom'
import IconFechar from "../assets/fechar.svg"

export function Header() {
  return (
    <header>
        <section>
            <div className="botao">
            <button>
              <img src={ IconMenu } alt="ícone de menu de hamburguer" />
            </button>
          </div>

          <div >
            <div>
              <h1>Drink experience</h1>
              <div className='fechar'>
                <button>
                  <img src={ IconFechar } alt="icone de x" />
                </button>
              </div>
            </div>

            <div className="navegacao">
              <Link to="/historia" className="link">História</Link>
              <Link to="/funcionamento" className="link">Funcionamento</Link>
              <Link to="/comprovacao" className="link">Comprovação</Link>
              <Link to="/componentes" className="link">Componentes</Link>
              <Link to="/sobre-nos" className="link">Sobre nós</Link>
            </div>
          </div>

          <Link to="/" className='home'>
            <img src={ IconHome } alt="ícone de casa" />
          </Link>
        </section>
    </header>
  )
}
