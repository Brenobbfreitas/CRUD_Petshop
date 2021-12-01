import { clienteService } from "../service/cliente-service.js"

const pegaURL = new URL(window.location) //instanciar uma url nova

const id = pegaURL.searchParams.get('id')

// percorrer o dom para pegar os nome e email

const inputNome = document.querySelector('[data-nome]')
const inputEmail = document.querySelector('[data-email]')


//passa para os campos em branco o email e nome
clienteService.detalhaCliente(id)
.then(dados => {
    inputNome.value = dados.inputNome
    inputEmail.value = dados.inputEmail
})