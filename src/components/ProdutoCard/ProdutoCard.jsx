import "./ProdutoCard.css"

function ProdutoCard({ imagem, nome, preco, categoria }) {
  return (
    <div className="produto-card">
      <img src={imagem} alt={nome} />

      <div className="produto-info">
        <span>{categoria}</span>

        <h3>{nome}</h3>

        <p className="preco">
          R$ {preco}
        </p>

        <button>Ver produto</button>
      </div>
    </div>
  )
}

export default ProdutoCard