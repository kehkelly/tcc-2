import Pontos from "../assets/pontos.svg"
import {Header} from "../components/Header"

export function Comprovacao() {
  return (
    <body>
      <Header />
      <main>
        <h2>Os estudos científicos, realizados na área, indicam que:</h2>

        <img src={Pontos} alt="Três pontos na vertical" />

        <p>Mixologia é o processo de formação em coqueteleiras, a arte de fazer drinks com equilíbrio das bebidas, a criação de um coquetel.
        A arte de misturar bebidas gera renda para o estabelecimento.</p>

        <img src={Pontos} alt="Três pontos na vertical" />

        <p>É possível montar coquetéis sem o uso de muitos utensílios, como a coqueteleira manual, e reduzir o esforço humano.
        As bebidas podem ficar armazenadas por 150 dias.</p>

        <img src={Pontos} alt="Três pontos na vertical" />

        <p>A inserção da tecnologia no setor de bebidas resulta na automação de trabalhos fáceis.
        Fontes:</p>

        <div>
          <p>Coquetéis inovadores: Avaliação físico-química, sensorial e estudo da estabilidade durante o armazenamento.:</p>
          <a href="https://drive.google.com/file/d/13j6NtRdT0ZLx_nPKLDa-R5InbQ2_Ofv2/view?usp=drive_link">Acessar</a>
        </div>

        <div>
          <p>BARDUINO: Sistema de distribuição aleatória de bebidas, baseado na plataforma arduíno:</p>
          <a href="https://drive.google.com/file/d/1Ya4o03HbrPGqkQpPePn4WKZ7QMer4YWW/view?usp=drive_link">Acessar</a>
        </div>

        <div>
          <p>Estudo das Bebidas e Coquetelaria:</p>
          <a href="https://drive.google.com/file/d/1JZxdpUrxLU-Zev8q36D4loyE272xs90L/view?usp=drive_link">Acessar</a>
        </div>
      </main>
    </body>
  )
}
