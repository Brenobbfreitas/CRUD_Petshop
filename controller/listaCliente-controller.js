import { clienteService } from "../service/cliente-service.js";

// ta criando o template
const criarNovaLinha = (nome, email, id) => {
  // cria a linha do elemento
  const linhaNovoCliente = document.createElement('tr');
  const conteudo = `
              <td class="td" data-td>${nome}</td>
               <td>${email}</td>
             <td>
              <ul class="tabela__botoes-controle">
                  <li><a href="../telas/edita_cliente.html?=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                  <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
              </ul>
          </td>
          `;
  //
  linhaNovoCliente.innerHTML = conteudo;
  linhaNovoCliente.dataset.id = id;
  return linhaNovoCliente;
};

// vai percorrer a arvore do dom e pegar o corpo da tabela
const tabela = document.querySelector("[data-tabela]")


// excluindo pelo id
tabela.addEventListener('click', (evento)=>{
  let ehBotaoDeletar = evento.target.className == 'botao-simples botao-simples--excluir'
  if(ehBotaoDeletar){
    const linhaCliente = evento.target.closest('[data-id]')
    let id = linhaCliente.dataset.id
    clienteService.removeCliente(id)
    .then( ()=>{
      linhaCliente.remove()
    })
  }

})

// pegando os dados, fazendo um loop e interando na tela
clienteService.listaCliente()
.then(data => {
    data.forEach(elemento => {
    tabela.appendChild(criarNovaLinha(elemento.nome, elemento.email, elemento.id))
})})
