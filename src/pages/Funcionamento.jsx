import { Header } from "../components/Header"
import Pontos from "../assets/pontos.svg"

export function Funcionalmento() {
  return (
    <body>
      <Header/>
      <main>
        <h2>Funcionamento</h2>
        <p>A proposta da coqueteleira é a montagem de seu drink de maneira fácil e rápida através do seu celular.</p>
        <img src={Pontos} alt="três pontos na vertical" />

        <p>A coqueteleira será conectada ao seu smartphone via Bluetooth e por ele você pode escolher as bebidas de sua preferência para mistura-las na montagem do seu drink.</p>
        <img src="" alt="imagem de um celular conectando o bluetooth" />

        
      </main>
    </body>
  )
}
