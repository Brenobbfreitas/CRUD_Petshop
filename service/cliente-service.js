// comunicação com a api
const listaCliente = () => {
     return fetch(`http://localhost:3000/profile`)
      .then(resposta => {
        return resposta.json();
        // utilizar o json para converter a resposta para JS
      })
}

export const clienteService = {
    listaCliente
}
