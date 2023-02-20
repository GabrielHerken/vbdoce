/* import logo from './assets/vbdoce-logo.png'; */

function App() {
  function Produtos() {
    document.getElementById('main').className = 'not-visible';
    document.getElementById('produtos').className = '';
  }

  function voltar() {
    document.getElementById('main').className = '';
    document.getElementById('produtos').className = 'not-visible';
  }

  return (
    <div>
      <div id="main">
        <header>
          <nav className="header-navigation">
            <ul>
              <h1>VB Docê</h1>
              <div>
                <li onClick={Produtos}>Produtos</li>
                <li>Serviços</li>
                <li>Orçamentos</li>
                <li>Perguntas Frequentes</li>
              </div>
            </ul>
          </nav>
        </header>
        <main>
          {/* <img src={logo} alt="Logo da VB Docê" title="Logo" width={1081} height={1081}></img> */}
        </main>
      </div>
      <div id="produtos" className="not-visible">
        <header>
          <nav className="header-navigation">
            <ul>
              <h1>VB Docê</h1>
              <div>
                <li onClick={voltar}>Voltar</li>
              </div>
            </ul>
          </nav>
        </header>
        <main>
          <div className="products-table">
            <div className="products-group">
              <div className="products-title">Promoções</div>
              <div><div><span>Kit Mini Cones:</span> 5 mini cones R$32,00</div><a href="https://www.ifood.com.br/delivery/belo-horizonte-mg/pipoqueria-alipio-de-melo/20eed6bc-a025-4c27-bc68-aca8e7d01dd9?prato=4a5957d3-ad40-4784-a711-5ea818b1f129" rel="noreferrer" target="_blank">Comprar</a></div>
              <div><div><span>Kit Mix:</span> até 6 sabores diferentes 350g R$45,00</div><a href="https://www.ifood.com.br/delivery/belo-horizonte-mg/pipoqueria-alipio-de-melo/20eed6bc-a025-4c27-bc68-aca8e7d01dd9?prato=015a6daf-4265-4cbe-93e2-325a371b3e7c" rel="noreferrer" target="_blank">Comprar</a></div>
              <details>
                <summary>Sabores</summary>
                <ul>
                  <li>Alpino</li>
                  <li>Chocolate</li>
                  <li>Chokito</li>
                  <li>Churros</li>
                  <li>Leite Ninho</li>
                  <li>Morango</li>
                  <li>Oreo</li>
                  <li>Ovomaltine</li>
                  <li>Paçoca</li>
                  <li>Prestígio</li>
                  <li>Sensação</li>
                </ul>
              </details>
            </div>
            <div className="products-group">
              <div className="products-title">Pipocas Gourmet</div>
              <div><div><span>Mini Cone:</span> 50g R$7,50</div><a href="https://www.ifood.com.br/delivery/belo-horizonte-mg/pipoqueria-alipio-de-melo/20eed6bc-a025-4c27-bc68-aca8e7d01dd9?prato=80d741e4-864c-4605-9858-6e3187a5be43" rel="noreferrer" target="_blank">Comprar</a></div>
              <div><div><span>Cone:</span> 80g R$12,00</div><a href="https://www.ifood.com.br/delivery/belo-horizonte-mg/pipoqueria-alipio-de-melo/20eed6bc-a025-4c27-bc68-aca8e7d01dd9?prato=73179043-087b-4cc7-8bfd-e278a981940e" rel="noreferrer" target="_blank">Comprar</a></div>
              <div><div><span>Pote Médio:</span> 160g R$21,00</div><a href="https://www.ifood.com.br/delivery/belo-horizonte-mg/pipoqueria-alipio-de-melo/20eed6bc-a025-4c27-bc68-aca8e7d01dd9?prato=b87e5d7d-fa0a-4935-9f82-26d5c7a3d472" rel="noreferrer" target="_blank">Comprar</a></div>
              <div><div><span>Pote Grande:</span> 320g R$39,90</div><a href="https://www.ifood.com.br/delivery/belo-horizonte-mg/pipoqueria-alipio-de-melo/20eed6bc-a025-4c27-bc68-aca8e7d01dd9?prato=2502b6f5-fd31-4b4d-9c70-995c2a6488fc" rel="noreferrer" target="_blank">Comprar</a></div>
              <div><div><span>Lata:</span> 250g R$29,90</div><a href="https://www.ifood.com.br/delivery/belo-horizonte-mg/pipoqueria-alipio-de-melo/20eed6bc-a025-4c27-bc68-aca8e7d01dd9?prato=080fde58-87a5-421b-a232-6e2e1bd31649" rel="noreferrer" target="_blank">Comprar</a></div>
              <details>
                <summary>Sabores</summary>
                <ul>
                  <li>Alpino</li>
                  <li>Chocolate</li>
                  <li>Chokito</li>
                  <li>Churros</li>
                  <li>Leite Ninho</li>
                  <li>Morango</li>
                  <li>Oreo</li>
                  <li>Ovomaltine</li>
                  <li>Paçoca</li>
                  <li>Prestígio</li>
                  <li>Sensação</li>
                </ul>
              </details>
            </div>
            <div className="products-group">
              <div className="products-title">Tubo Latas - Temas Diversos</div>
              <div><div><span>Canecas Comemorativas:</span> A partir de  R$35,00</div><a href="https://www.ifood.com.br/delivery/belo-horizonte-mg/pipoqueria-alipio-de-melo/20eed6bc-a025-4c27-bc68-aca8e7d01dd9?prato=6e45d777-62c1-49c9-9be2-2e92110814b8" rel="noreferrer" target="_blank">Comprar</a></div>
              <div><div><span>Tubo Latas:</span> A partir de R$22,00</div><a href="https://www.ifood.com.br/delivery/belo-horizonte-mg/pipoqueria-alipio-de-melo/20eed6bc-a025-4c27-bc68-aca8e7d01dd9?prato=9383b247-a9e3-46d7-8e61-d053b10bdc3d" rel="noreferrer" target="_blank">Comprar</a></div>
              <details>
                <summary>Tamanhos</summary>
                <ul>
                  <li>Pequena - 130g - R$22,00</li>
                  <li>Grande - 190g - R$28,00</li>
                </ul>
              </details>
              <details>
                <summary>Temas</summary>
                <h2>Canecas Comemorativas - 70g/110g - R$35,00</h2>
                <ul>
                  <li>Mãe, amor eterno</li>
                  <li>Mãe, como é grande o meu amor por você</li>
                  <li>Mãe, você é a melhor</li>
                  <li>Para um Irmão especial</li>
                  <li>Para uma super Irmã</li>
                  <li>Para uma super Madrinha</li>
                  <li>Para um super Padrinho</li>
                </ul>
                <h2>Tubo Latas - 130g/190g - R$22,00/R$28,00</h2>
                <ul>
                  <li>Casal Love Meme</li>
                  <li>Feliz Aniversário</li>
                  <li>Meu eterno namorado</li>
                  <li>Peace - Love - Popcorn</li>
                  <li>Te quero pra vida toda</li>
                </ul>
              </details>
              <details>
                <summary>Sabores</summary>
                <ul>
                  <li>Alpino</li>
                  <li>Chocolate</li>
                  <li>Chokito</li>
                  <li>Churros</li>
                  <li>Leite Ninho</li>
                  <li>Morango</li>
                  <li>Oreo</li>
                  <li>Ovomaltine</li>
                  <li>Paçoca</li>
                  <li>Prestígio</li>
                  <li>Sensação</li>
                </ul>
              </details>
            </div>
            <div className="products-group">
              <div className="products-title">Outras Delícias</div>
              <div><div><span>Geladinhos Gourmet:</span>150g A partir de R$7,50</div><a href="https://www.ifood.com.br/delivery/belo-horizonte-mg/pipoqueria-alipio-de-melo/20eed6bc-a025-4c27-bc68-aca8e7d01dd9?prato=a0d2b2a2-e443-4638-9ae7-337bf700d02a" rel="noreferrer" target="_blank">Comprar</a></div>
              <details>
                <summary>Sabores</summary>
                <ul>
                  <li>Alpino</li>
                  <li>Leite Ninho com Nutella</li>
                  <li>Oreo</li>
                  <li>Ovomaltine</li>
                </ul>
              </details>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
