import React, { useState } from 'react';
import IconHome from "../assets/icon-house.svg";
import { Link } from 'react-router-dom';
import { List, X } from "@phosphor-icons/react";
import { MenuMobile } from '../styles/Header.styles';

export function Header() {
  const [abrirMenu, setAbrirMenu] = useState(false)

  function handleAbrir() {
    if(abrirMenu === true) {
      setAbrirMenu(false)
      return
    }
    setAbrirMenu(true)
  }

  return (
    <header>
      <MenuMobile abrir={abrirMenu}>
          <div className="botao">
            <button onClick={handleAbrir}>
              <List size={32} weight="bold"/>
            </button>
            <h1>Drink experience</h1>
          </div>

          <div>
            <nav>
              <div>
                <h1>Drink experience</h1>
                <button onClick={handleAbrir}>
                  <X size = {32} weight="bold" color="#fff"/>
                </button>
              </div>
              <Link to="/historia" className="link">História</Link>
              <Link to="/funcionamento" className="link">Funcionamento</Link>
              <Link to="/comprovacao" className="link">Comprovação</Link>
              <Link to="/componentes" className="link">Componentes</Link>
              <Link to="/sobre-nos" className="link">Sobre nós</Link>
            </nav>
          </div>

          <Link to="/" className='home'>
            <img src={ IconHome } alt="ícone de casa" />
          </Link>
      </MenuMobile>
    </header>
  )
}
