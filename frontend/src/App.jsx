import Header from "./components/Header/Header";
import ProdutoCard from "./components/ProdutoCard/ProdutoCard";
import "./App.css";

// ============================================================
// FRAMEWORKS 1 — DESAFIO 2
// REACT CONSUMINDO UMA API
//
// Complete somente os espaços indicados por TODO.
// Não altere os componentes Header e ProdutoCard.
// ============================================================

// TODO 1:
// Importe do React os dois Hooks necessários nesta etapa.
// Dica: precisaremos de um Hook para guardar os produtos
// e outro para executar a busca quando o componente carregar.
//
// ESCREVA AQUI:


const curso = "Desenvolvimento Web";
const tecnologia = "React";

function App() {

  // ==========================================================
  // O array abaixo representa a etapa anterior do projeto.
  //
  // TODO 2:
  // Quando você criar o State dos produtos, comente este array.
  // ==========================================================

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

  // TODO 3:
  // Crie um State chamado produtos.
  // O valor inicial deve ser um array vazio.
  //
  // ESCREVA AQUI:


  // TODO 4:
  // Crie um useEffect que seja executado quando o componente carregar.
  //
  // Dentro dele:
  // 1. faça uma requisição para:
  //    http://localhost:3000/api/produtos
  // 2. converta a resposta para JSON;
  // 3. receba os dados;
  // 4. atualize o State produtos;
  // 5. mostre os dados no console para testar;
  // 6. trate um possível erro com catch().
  //
  // ESCREVA AQUI:




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
                // TODO 5:
                // Depois que os produtos vierem da API,
                // altere a key para utilizar o id do produto.
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
