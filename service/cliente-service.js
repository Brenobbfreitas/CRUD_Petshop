const criarNovaLinha = (nome, email) => {
  // cria a linha do elemento
  const linhaNovoCliente = document.createElement("tr");
  const conteudo = `
            <td class="td" data-td>${nome}</td>
             <td>${email}</td>
           <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td>
        `;
  //
  linhaNovoCliente.innerHTML = conteudo;
  return linhaNovoCliente;
};

// vai percorrer a arvore do dom e pegar o data-tabela especificado
const tabela = document.querySelector("[data-tabela]");

// inicializando o objeto Request

const listaCliente = () => {
    
    return fetch(`http://localhost:3000/profile`)
    // a fetch já faz um get e retorna uma promisse
    .then(resposta => {
        // utilizar o json para converter a resposta para JS
        return resposta.json();
    })
};

listaCliente()
.then(data => {
    data.forEach(element => {
        tabela.appendChild(criarNovaLinha(element.nome, element.email))
    });
})