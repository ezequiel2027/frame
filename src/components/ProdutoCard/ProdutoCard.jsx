import { useState } from "react"
import "./ProdutoCard.css"

function ProdutoCard({ imagem, nome, preco, categoria }) {
  const [quantidade, setQuantidade] = useState(1)

  function diminuirQuantidade() {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1)
    }
  }

  function aumentarQuantidade() {
    setQuantidade(quantidade + 1)
  }

  return (
    <div className="produto-card">
      <img src={imagem} alt={nome} />

      <div className="produto-info">
        <span>{categoria}</span>
        <h3>{nome}</h3>

        <p className="preco">R$ {preco}</p>

        <p className="quantidade-titulo">Quantidade</p>

        <div className="quantidade-controle">
          <button onClick={diminuirQuantidade}>-</button>
          <strong>{quantidade}</strong>
          <button onClick={aumentarQuantidade}>+</button>
        </div>

        <button className="ver-produto">Ver produto</button>
      </div>
    </div>
  )
}

export default ProdutoCard
