import { Header } from "../components/Header";
import Pontos from "../assets/pontos.svg"

export function Historia() {
  return (
    <body>
      <Header />
      <main>
        <h2>História</h2>
        <p>A inspiração da criação do protótipo minimalista veio de um amigo, Miguel, que enquanto trabalhava em um bar teve uma explosão de ideias.</p>

        <img src={ Pontos } alt="três pontos na vertical" />

        <p>Ele percebeu que poderia existir algo para combinar sua paixão por coquetéis com a praticidade do dia a dia, mas não sabia como e conversou com a nossa equipe.</p>

        <img src={ Pontos } alt="três pontos na vertical" />

        <p>Como resultado da conversa, nasce uma tecnologia verdadeiramente inovadora: uma coqueteleira inteligente.</p>

        <img src="" alt="pessoas reunidas para conversar" />
      </main>
    </body>
  )
}
