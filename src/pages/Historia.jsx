import { Header } from "../components/Header";
import { Footer } from "../components/Footer"
import Pontos from "../assets/pontos.svg"

export function Historia() {
  return (
    <>
      <Header />
      <main>
        <section>
          <div>
            <h2>História</h2>
          </div>
          <p>A inspiração da criação do protótipo minimalista veio de um amigo, Miguel, que enquanto trabalhava em um bar teve uma explosão de ideias.</p>

          <div>
            <img src="/img-de-bar.jpg" alt="ilustração de um bar" className="imagem"/>
          </div>

          <p>Ele percebeu que poderia existir algo para combinar sua paixão por coquetéis com a praticidade do dia a dia, mas não sabia como e conversou com a nossa equipe.</p>

          <div>
            <img src={ Pontos } alt="três pontos na vertical" />
          </div>

          <p>Como resultado da conversa, nasce uma tecnologia verdadeiramente inovadora: uma coqueteleira inteligente.</p>

          <div>
            <img src="/img_reuniao.jpg" alt="pessoas reunidas para conversar" className="imagem"/>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
