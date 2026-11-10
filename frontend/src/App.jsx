// DESAFIO 3 — BASE PRONTA: o React já consome a API do Desafio 2.
// Nesta aula, NÃO é necessário modificar o front-end.
import Header from "./components/Header/Header";
import ProdutoCard from "./components/ProdutoCard/ProdutoCard";
import "./App.css";

// ============================================================
// DESAFIO 3 - REACT JÁ CONSUMINDO NOSSA API
// MATERIAL DO PROFESSOR
//
// Integração do Desafio 2 já concluída; não alterar neste desafio.
// ============================================================

// IMPORTAÇÃO ATIVA DESDE O DESAFIO 2:
import { useEffect, useState } from "react";

const curso = "Desenvolvimento Web";
const tecnologia = "React";

function App() {

  // HISTÓRICO: array local da etapa anterior (desativado).
  /* ARRAY LOCAL DO DESAFIO 1 — SUBSTITUÍDO PELO STATE
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
  */

  // ==========================================================
  // STATE DOS PRODUTOS — JÁ ATIVO
  // O array acima já está comentado:
  //
  const [produtos, setProdutos] = useState([]);
  //
  // O array começa vazio porque os dados virão da API.
  // ==========================================================

  // ==========================================================
  // BUSCA NA API — JÁ ATIVA
  // Endpoint para testar:
  // http://localhost:3000/api/produtos
  //
  useEffect(() => {
    fetch("http://localhost:3000/api/produtos")
      .then((resposta) => resposta.json())
      .then((dados) => {
        console.log("Produtos recebidos da API:", dados);
        setProdutos(dados);
      })
      .catch((erro) => {
        console.error("Erro ao buscar produtos:", erro);
      });
  }, []);
  //
  // fetch()       -> faz a requisição HTTP
  // .json()       -> converte a resposta
  // dados         -> produtos recebidos
  // setProdutos() -> atualiza o State
  // []            -> executa quando o componente carregar
  // ==========================================================

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
                // A key já usa o id fornecido pela API.
                key={produto.id}
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
