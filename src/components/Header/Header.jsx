import './Header.css'

function Header() {
  return (
    <header className="header">

      <div className="logo">
        <span>|||||</span>
        <h1>Meu Site Vendas</h1>
      </div>

      <nav className="menu">

        <a href="/">Início</a>

        <a href="/categorias">
          Categorias
        </a>
         <a href="/sobre">
          Ofertas
        </a>

        <a href="/sobre">
          Sobre
        </a>

        <a href="/login">
          Entrar
        </a>

      </nav>

    </header>
  )
}

export default Header