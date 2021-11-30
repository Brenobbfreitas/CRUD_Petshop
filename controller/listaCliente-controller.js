import { clienteService } from "../service/cliente-service.js";

// ta criando o template
const criarNovaLinha = (nome, email) => {
  // cria a linha do elemento
  const linhaNovoCliente = document.createElement('tr');
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

// vai percorrer a arvore do dom e pegar o corpo da tabela
const tabela = document.querySelector("[data-tabela]")

// pegando os dados, fazendo um loop e interando na tela
clienteService.listaCliente()
.then(data => {
    data.forEach(elemento => {
    tabela.appendChild(criarNovaLinha(elemento.nome, elemento.email))
})})
