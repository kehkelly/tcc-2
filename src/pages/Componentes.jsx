import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import Pontos from "../assets/pontos.svg"

export function Componentes() {
  return (
    <>
      <Header />
      <main>
        <section className="sectionGeral">
          <div>
            <h2>Componentes arduíno</h2>
            <img src={Pontos} alt="três pontos na vertical" />
          </div>

          <div>
            <div>
              <p><span>Módulo Bluetooth HC05 (R$32,90):</span> É um módulo de comunicação sem fio que utiliza a tecnologia Bluetooth. Ele permite que dispositivos se comuniquem entre si sem a necessidade de cabos. Pode ser utilizado para estabelecer uma conexão sem fio entre o Arduino (placa UNO R3) e outros dispositivos, como smartphones ou computadores.</p>
              <img src="/modulo_bluetooth.jpg" alt="imagem do módulo bluetooth" className="imagem"/>
            </div>
            <img src={Pontos} alt="três pontos na vertical" className="pontos"/>
          </div>

          <div>
            <div>
              <p><span>Capacitor eletrolítico 0.1uF 50V (R$2,00):</span>são elementos reativos que reagem à passagem de corrente através do acúmulo de cargas elétricas, ou seja, o capacitor é capaz de armazenar energia eletroestática.</p>
              <img src="/capacitores.jpg" alt="imagem do capacitor" className="imagem"/>
            </div>
            <img src={Pontos} alt="três pontos na vertical" className="pontos"/>
          </div>

          <div>
            <div>
                <p><span>Jumpers (R$7,90): </span>São cabos utilizados para estabelecer conexões entre componentes eletrônicos em um circuito. Eles permitem conectar os pinos de diferentes dispositivos de maneira temporária e flexível.</p>
                <img src="/jumpers.jpg" alt="imagem dos jumpers" className="imagem"/>
              </div>
              <img src={Pontos} alt="três pontos na vertical" className="pontos"/>
          </div>

          <div>
            <div>
              <p><span>Led (R$2,50): </span>É um diodo semicondutor, composto por cristais de silício e germânio, que quando energizado emite luz visível a olho nú.</p>
              <img src="/quartetos-led.jpg" alt="imagem do led" className="imagem"/>
            </div>
            <img src={Pontos} alt="três pontos na vertical" className="pontos"/>
          </div>

          <div>
            <div>
              <p><span>Mangueira de silicone (R$5,90): </span>Uma mangueira flexível feita de silicone, utilizada para transportar líquidos. Pode ser conectada à bomba de água para direcionar o fluxo de água para onde for necessário.</p>
              <img src="/mangueira.jpg" alt="imagem da mangueira" className="imagem"/>
            </div>
            <img src={Pontos} alt="três pontos na vertical" className="pontos"/>
          </div>

          <div>
            <div>
              <p><span>Micro servo 9g(R$11,90): </span>São atuadores projetados para aplicações onde é necessário fazer o controle de movimento com posicionamento de alta precisão, reversão rápida e de alto desempenho.</p>
              <img src="/micro_servo.jpg" alt="imagem do micro servo motor" className="imagem"/>
            </div>
            <img src={Pontos} alt="três pontos na vertical" className="pontos"/>
          </div>

          <div>
            <div>
              <p><span>Mini bomba de água (R$29,90):</span>É um dispositivo que utiliza energia elétrica para bombear água de um local para outro. A alimentação de 12V indica que ela requer uma fonte de energia de 12 volts para funcionar.</p>
              <img src="./mini-bomba-dagua.png" alt="imagem da bomba de água" className="imagem"/>
            </div>
            <img src={Pontos} alt="três pontos na vertical" className="pontos"/>
          </div>

          <div>
            <div>
              <p><span>Módulo relé 2 canais (R$9,90): </span>Um relé é um interruptor controlado por um sinal elétrico. O módulo relé 2 canais permite controlar até dois dispositivos elétricos usando um microcontrolador, como o Arduino. A alimentação de 5V indica que ele opera com uma tensão de 5 volts.</p>
              <img src="./Módulo-Relé.jpg" alt="imagem do módulo relé" className="imagem"/>
            </div>
            <img src={Pontos} alt="três pontos na vertical" className="pontos"/>
          </div>

          <div>
            <div>
              <p><span>Placa UNO (R$35,90): </span>Placa de prototipagem integrada pelo microcontrolador ATmega328p, um conversor USB-UART e componentes de alimentação e temporização, como um regulador e dois ressonadores cerâmicos. É uma das menores placas da série original da Arduino e compatível com outras desta, sendo uma ótima opção para prototipagem.</p>
              <img src="./placa uno.webp" alt="imagem da placa uno" className="imagem"/>
            </div>
            <img src={Pontos} alt="três pontos na vertical" className="pontos"/>
          </div>

          <div>
            <div>
              <p><span>Protoboard (R$7,50): </span>Placa que permite a montagem de circuitos eletrônicos temporários. Ele fornece uma matriz de furos de conexão e linhas condutoras para facilitar a inserção e a interconexão de componentes eletrônicos.</p>
              <img src="./protoboaard.jpg" alt="imagem da protoboard" className="imagem"/>
            </div>
            <img src={Pontos} alt="três pontos na vertical" className="pontos"/>
          </div>

          <div>
            <div>
              <p><span>Conector de bateria 9v (R$2,90): </span>Conector de bateria é ideal para uso em projetos eletrônicos como brinquedos, dispositivos de iluminação, instrumentos musicais, e muitos outros.</p>
              <img src="./conector.jpg" alt="imagem do conector" className="imagem"/>
            </div>
            <img src={Pontos} alt="três pontos na vertical" className="pontos"/>
          </div>

          <div>
            <p><span>Bateria 9v (R$35,90): </span> A bateria de nove volts, geralmente consiste em seis células alcalinas de 1,5V conectadas em série. Assim, ela fornece uma tensão nominal de 9 volts. Contudo, a tensão real pode variar entre 7,2 e 9,6 volts, dependendo da química da bateria.</p>
            <img src="./bateria.jpg" alt="imagem da bateria" className="imagem"/>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
