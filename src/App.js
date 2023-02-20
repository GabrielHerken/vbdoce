import logo from './assets/vbdoce-logo.png';

function App() {
  return (
    <div>
      <header>
        <nav className="header-navigation">
          <ul>
            <h1>VB Docê</h1>
            <div>
              <li><a>Contate-nos</a></li>
              <li><a>Orçamentos</a></li>
              <li><a>Produtos</a></li>
              <li><a>Serviços</a></li>
            </div>
          </ul>
        </nav>
      </header>
      <main>
        <img src={logo} alt="Logo da VB Docê" title="Logo" width={1081} height={1081}></img>
      </main>
    </div>
  );
}

export default App;
