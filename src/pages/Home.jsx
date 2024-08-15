import Pontos from "../assets/pontos.svg"
import { Footer } from "../components/Footer.jsx"
import { Header } from "../components/Header.jsx"


export function Home() {
  return (
    <>
      <Header />
      <main>
        <h2>Transforme suas bebidas em obras-primas com a Drink Experience!</h2>

        <img src={ Pontos } alt="três pontos na vertical, para decoração" />

        <p>Apresentamos a Drink Experience, uma coqueteleira inteligente, a ferramenta definitiva para elevar suas habilidades de preparação de bebidas a um novo patamar. Se você é um amante de coquetéis ou um entusiasta da culinária, esta é a sua chance de impressionar seus amigos e familiares com criações de bebidas únicas e deliciosas.</p>

        <img src="/img-de-coquetels.jpg" alt="mesa com diferentes bebidas" className="imagem"/>

        <p>A coqueteleira inteligente combina design elegante com tecnologia avançada para oferecer uma experiência no preparo de bebidas incomparáveis. Com seu design ergonômico e materiais de alta qualidade, esta coqueteleira não só se destaca em termos de estilo, mas também garante durabilidade e facilidade de uso.</p>

        <img src={ Pontos } alt="três pontos na vertical, para decoração" />

        <p>Equipada com recursos inteligentes, basta selecionar sua receita favorita no aplicativo móvel complementar e a coqueteleira irá guiá-lo à agitação perfeita.</p>

        <img src="" alt="imagem do produto" className="imagem"/>

        <p>Além disso, a Drink Experience oferece uma variedade de receitas personalizáveis, permitindo que você experimente e crie suas próprias combinações de sabores. Seja um clássico Manhattan ou uma inovadora mistura de frutas tropicais, as possibilidades são infinitas com esta coqueteleira versátil.</p>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
