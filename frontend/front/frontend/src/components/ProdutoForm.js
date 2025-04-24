import React, {use, useState} from "react"; 
import api from '../services/api'

function ProdutoForm({ onProdutoAdicionado}) {
    const [nome, setNome] = useState ('');

    const handleSubmit = (e) => {
        e.preventDefault();

        api.post('produtos/', { nome })
        .then(reponse => {
            onProdutoAdicionado();
            setNome('');
        })
        .catch(error => console.error('Erro ao adicionar produtos', error))
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Nome do produto"
            value={nome}
            onChange={(e)=> setNome(e.target.value)}
            />
        <button type="submit">Adicionar</button> 
        </form>


    )
};

export default ProdutoForm;