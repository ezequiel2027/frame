import Header from "./components/Header/Header";
import ProdutoCard from "./components/ProdutoCard/ProdutoCard";
import "./App.css";

const curso = "Desenvolvimento Web";
const tecnologia = "React";

function App() {
  const produtos = [
    {
      nome: "Smartphone",
      preco: "899,90",
      categoria: "Eletrônicos",
      imagem: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },
    {
      nome: "Notebook",
      preco: "2.499,90",
      categoria: "Informática",
      imagem: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    },
    {
      nome: "Fone Bluetooth",
      preco: "149,90",
      categoria: "Eletrônicos",
      imagem: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },
    {
      nome: "Tênis Esportivo",
      preco: "199,90",
      categoria: "Moda",
      imagem: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    }
  ];

  return (
    <div className="app">
      <Header />

      <main>
        <section className="apresentacao">
          <p>Curso: {curso}</p>
          <p>Meu primeiro projeto utilizando {tecnologia}.</p>
        </section>

        <section className="produtos">
          <h2>Produtos em destaque</h2>

          <div className="produtos-grid">
            {produtos.map((produto) => (
              <ProdutoCard
                key={produto.nome}
                imagem={produto.imagem}
                nome={produto.nome}
                preco={produto.preco}
                categoria={produto.categoria}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
