// DESAFIO 3 — PASSO 4: CADASTRAR PRODUTOS INICIAIS NO MONGODB
// Execute na pasta backend: npm run seed
// O seed é IDEMPOTENTE: atualizará os mesmos 4 IDs sem duplicá-los.
const mongoose = require("mongoose");
const Produto = require("./models/Produto");
const MONGODB_URI = "mongodb://127.0.0.1:27017/site_vendas";

const produtosIniciais = [
  { id: 1, nome: "Smartphone", preco: "899,90", categoria: "Eletrônicos", imagem: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
  { id: 2, nome: "Notebook", preco: "2.499,90", categoria: "Informática", imagem: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853" },
  { id: 3, nome: "Fone Bluetooth", preco: "149,90", categoria: "Eletrônicos", imagem: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e" },
  { id: 4, nome: "Tênis Esportivo", preco: "199,90", categoria: "Moda", imagem: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" }
];

// ATIVIDADE 4 — Complete a função para cadastrar os produtos.
// 1. Conecte ao MongoDB local.
// 2. Percorra produtosIniciais.
// 3. Use Produto.updateOne() com upsert: true para evitar duplicações.
// 4. Exiba mensagem de sucesso, trate erros e desconecte no finally.
// 5. Execute a função somente após implementá-la.

async function executarSeed() {
  // ESCREVA AQUI:
}

// Quando terminar, retire o comentário da chamada abaixo:
// executarSeed();
