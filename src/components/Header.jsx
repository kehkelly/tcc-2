import React, { useState } from 'react'
import IconMenu from "../assets/menu.svg"
import IconHome from "../assets/icon-house.svg"
import { Link } from 'react-router-dom'
import IconFechar from "../assets/fechar.svg"

export function Header() {
    const [abrirMenu, setAbrirMenu] = useState(false)
    const [fecharMenu, setFecharMenu] = useState(false)

    function headerAbrir(){
      setAbrirMenu(true)
    }

    function headerFechar() {
      setFecharMenu(true)
    }

  return (
    <header>
        <section>
            <div className="botao">
            <button onClick={headerAbrir}>
              <img src={ IconMenu } alt="ícone de menu de hamburguer" />
            </button>
          </div>

          <div className={abrirMenu === true? "open" : " "}>
            <div>
              <h1>Drink experience</h1>
              <div className={fecharMenu === true? "close" : " "}>
                <button onClick={headerFechar}>
                  <img src={IconFechar} alt="icone de x" />
                </button>
              </div>
            </div>

            <div className="navegacao">
              <Link to="/historia" className='link'>História</Link>
              <Link to="/funcionamento" className='link'>Funcionamento</Link>
              <Link to="/comprovacao" className='link'>Comprovação</Link>
              <Link to="/componentes" className='link'>Componentes</Link>
              <Link to="/sobre-nos" className='link'>Sobre nós</Link>
            </div>
          </div>

          <Link to="/" className='home'>
            <img src={IconHome} alt="ícone de casa" />
          </Link>
        </section>
    </header>
  )
}
