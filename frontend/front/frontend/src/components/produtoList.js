import React, { useState, useEffect } from "react";
import api from "../services/api";

function ProdutoList({ onProdutoRemovido }) {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    buscarProdutos();
  }, []);

  const buscarProdutos = () => {
    api.get('produtos')
      .then(response => {
        setProdutos(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erro ao buscar produtos", error);
        setLoading(false);
      });
  };

  const handleDelete = (id) => {
    api.delete(`produtos/${id}`)
      .then(() => {
        buscarProdutos(); 
        if (onProdutoRemovido) onProdutoRemovido(); 
      })
      .catch(error => {
        console.error("Erro ao deletar produto", error);
      });
  };

  if (loading) return <p>Carregando Produtos...</p>;

  return (
    <ul>
      {produtos.map(prod => (
        <li key={prod.id}>
          {prod.nome}{" "}
          <button onClick={() => handleDelete(prod.id)}>Deletar</button>
        </li>
      ))}
    </ul>
  );
}

export default ProdutoList;
