// FRAMEWORKS 1 - IFMS NAVIRAÍ
// DESAFIO 3 - INTEGRAÇÃO COM MONGODB LOCAL
// Professor: Ezequiel Pereira
//
// O servidor começa com a API do Desafio 2 funcionando.
// Descomente os passos em ordem e TESTE antes de avançar.

const express = require("express");
const cors = require("cors");

// ATIVIDADE 1 — Importar Mongoose e o modelo Produto.
// Defina também MONGODB_URI para o banco local site_vendas.
// ESCREVA AQUI:



const app = express();
const PORT = 3000;

// Permite a comunicação do React/Vite com esta API.
app.use(cors());

// BASE DO DESAFIO 2: array temporário.
// No PASSO 5, deixe de usar este array na rota GET.
const produtos = [
  {
    id: 1,
    nome: "Smartphone",
    preco: "899,90",
    categoria: "Eletrônicos",
    imagem: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  },
  {
    id: 2,
    nome: "Notebook",
    preco: "2.499,90",
    categoria: "Informática",
    imagem: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
  },
  {
    id: 3,
    nome: "Fone Bluetooth",
    preco: "149,90",
    categoria: "Eletrônicos",
    imagem: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  },
  {
    id: 4,
    nome: "Tênis Esportivo",
    preco: "199,90",
    categoria: "Moda",
    imagem: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  }
];

// ATIVIDADE 2 — Conectar ao MongoDB local com mongoose.connect().
// Informe no console se a conexão funcionou ou falhou.
// ESCREVA AQUI:


app.get("/", (req, res) => {
  res.send("API do Site de Vendas funcionando!");
});

// GET /api/produtos será consumido pelo React.
app.get("/api/produtos", (req, res) => {
  res.json(produtos);
});

// ATIVIDADE 5 — Substituir a rota antiga pela consulta ao MongoDB.
// Somente depois do seed, comente a rota GET acima.
// Crie GET /api/produtos usando async/await e Produto.find().
// Envie JSON e trate erros com status 500.
// ESCREVA AQUI:


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Produtos: http://localhost:${PORT}/api/produtos`);
});

// TESTE FINAL (após completar as atividades):
// 1. npm run seed, no backend, com MongoDB ligado.
// 2. npm start, no backend.
// 3. Abra http://localhost:3000/api/produtos.
// 4. Confira os cards no frontend sem modificar App.jsx.
