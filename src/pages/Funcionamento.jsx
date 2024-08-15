import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import Pontos from "../assets/pontos.svg"

export function Funcionamento() {
  return (
    <>
      <Header/>
      <main>
        <h2>Funcionamento</h2>
        <p>A proposta da coqueteleira é a montagem de seu drink de maneira fácil e rápida através do seu celular.</p>
        <img src={Pontos} alt="três pontos na vertical" />

        <p>A coqueteleira será conectada ao seu smartphone via Bluetooth e por ele você pode escolher as bebidas de sua preferência para mistura-las na montagem do seu drink.</p>
        <img src="/bluetooth.jpg" alt="imagem de um celular conectando o bluetooth" />
        <img src={Pontos} alt="três pontos na vertical" />

        <p>A comunicação direta com o celular faz com que um Led seja aceso na coqueteleira, indicando então a preparação do drink.
        </p>
        <img src="/led-solo.jpg" alt="imagem de simulação da máquina com o led de processamento ligado" />
        <img src={Pontos} alt="três pontos na vertical" />

        <p>Após seu preparo, outro Led é aceso, indicando então o término da montagem da bebida.</p>
        <img src="/led-1.jpg" alt="imagem de uma simulação da maquina com o led de finalização ligado" />

      </main>
      <Footer />
    </>
  )
}
