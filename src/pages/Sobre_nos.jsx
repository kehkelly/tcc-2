import { Header } from "../components/Header"
import Ponto from "../assets/pontos.svg"

export function Sobre_nos() {
  return (
    <body>
      <Header/>
      <main>
        <h2>Nossa equipe</h2>
        <p>Estudantes, técnico em informática, UNASP:</p>
        <img src={Pontos} alt="três pontos na vertical" />
        <div>
          <img src="" alt="foto de uma mulher, integrante do grupo" />
          <h3>Kelly Dantas</h3>
          <p>Entusiasta da tecnologia, hábil em programação, web design, entre outros.</p>
          <a href="">Linkedin</a>
        </div>
        <div>
          <img src="" alt="foto de uma mulher, integrante do grupo" />
          <h3>Leislane da Silva</h3>
          <p>Amante de design, hábil em marketing e design.</p>
          <a href="">Linkedin</a>
        </div>
        <div>
          <img src="" alt="foto de uma mulher, integrante do grupo" />
          <h3>Thais da Silva</h3>
          <p>Perita na área comercial, hábil em falar e tratar as pessoas.</p>
          <a href="">Linkedin</a>
        </div>
      </main>
    </body>
  )
}
