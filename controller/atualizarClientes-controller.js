import { clienteService } from "../service/cliente-service.js"

const pegaURL = new URL(window.location) //instanciar um objeto url nova e passou onde estamos ná pagina com o window.location

const id = pegaURL.searchParams.get('id')

// percorrer o dom para pegar os nome e email
const inputNome = document.querySelector('[data-nome]')
const inputEmail = document.querySelector('[data-email]')


//passa para os campos em branco o email e nome
clienteService.detalhaCliente(id)
.then(dados => {
    inputNome.value = dados.nome
    inputEmail.value = dados.email
})

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault()

    clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)
    window.location.href = "../telas/edicao_concluida.html"
    })