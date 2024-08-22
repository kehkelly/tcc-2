import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import Pontos from "../assets/pontos.svg"
import Kelly from "../assets/kelly.svg"
import Leis from "../assets/leislane.svg"
import Thais from "../assets/thais.svg"

export function Sobre_nos() {
  return (
    <>
      <Header/>
      <main>
        <h2>Nossa equipe</h2>
        <p>Estudantes, Técnico em informática, UNASP:</p>
        <img src={Pontos} alt="três pontos na vertical" />
        <section className="div_sobreNos">
          <div className="integrante">
            <img src={Kelly} alt="foto de uma mulher, integrante do grupo" />
            <h3>Kelly Dantas</h3>
            <p>Entusiasta da tecnologia, hábil em programação, web design, entre outros.</p>
            <a href="https://www.linkedin.com/in/kelly-dantas-0b9443202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linkedin</a>
          </div>
          <div className="integrante">
            <img src={Leis} alt="foto de uma mulher, integrante do grupo" />
            <h3>Leislane da Silva</h3>
            <p>Amante de design, hábil em marketing e design.</p>
            <a href="https://www.linkedin.com/in/leislane-silva-256a60271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linkedin</a>
          </div>
          <div className="integrante">
            <img src={Thais} alt="foto de uma mulher, integrante do grupo" />
            <h3>Thais da Silva</h3>
            <p>Perita na área comercial, hábil em falar e tratar as pessoas.</p>
            <a href="">Linkedin</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
