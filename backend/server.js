// ============================================================
// FRAMEWORKS 1 — DESAFIO 2
// BACK-END — API DE PRODUTOS
//
// Complete somente os espaços indicados por TODO.
// ============================================================

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

// Os produtos já estão preparados para esta atividade.
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

// TODO 1 — BACK-END:
// Crie uma rota GET para "/".
// Ela deve responder:
// "API do Site de Vendas funcionando!"
//
// ESCREVA AQUI:




// TODO 2 — BACK-END:
// Crie uma rota GET para "/api/produtos".
// Ela deve devolver o array produtos em formato JSON.
//
// ESCREVA AQUI:




// TODO 3 — BACK-END:
// Inicie o servidor utilizando a porta definida em PORT.
// Mostre no terminal uma mensagem informando o endereço do servidor.
//
// ESCREVA AQUI:



