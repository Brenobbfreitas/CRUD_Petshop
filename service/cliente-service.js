// comunicação com a api
const listaCliente = () => {
     return fetch(`http://localhost:3000/profile`)
      .then(resposta => {
        return resposta.json();
        // utilizar o json para converter a resposta para JS
      })
}

const criaCliente = (nome,email) =>{
  return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
          nome: nome,
          email: email
        })
  })
  .then(resposta =>{
    return resposta.body
  })
}

export const clienteService = {
    listaCliente,
    criaCliente
}
