import { Header } from "../components/Header";
import { Footer } from "../components/Footer"
import Pontos from "../assets/pontos.svg"

export function Historia() {
  return (
    <>
      <Header />
      <main>
        <section className="sectionGeral">
          <div>
            <h2>Jogo</h2>
          </div>
          <iframe width="900" height="655" src="https://www.youtube.com/embed/-6weBAixNyA?si=SLFoegdp0YMWg7j0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>
      </main>
      <Footer />
    </>
  )
}
