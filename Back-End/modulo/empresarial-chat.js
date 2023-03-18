
/*****************************************************************************
 * Objetivo: Retornar diversos valores de JSON filtrados para uma API para o empresarial chat
 * Data: 10/03/2023
 * Autor: André
 * Versão: 1.0 
 *****************************************************************************/

var listaContatos = require('./contatos.js')

var arquivoContatosConversas = listaContatos.contatos['whats-users']

const getContato = function (numeroDoContato) {
    let contatos = []
    let status = false
    let arrayMessages = []
    let jsonUser = {}


    arquivoContatosConversas.forEach(function (usuario) {

        // console.log('teste')
        if (usuario.number == numeroDoContato) {
            // console.log('teste')
            usuario.contacts.forEach(function (contato) {
                let jsonListaDeConversa = {}
                jsonListaDeConversa.name = contato.name
                jsonListaDeConversa.description = contato.description
                jsonListaDeConversa.image = contato.image
                arrayMessages = contato.messages
                jsonListaDeConversa.messages = arrayMessages

                contatos.push(jsonListaDeConversa)
            })
        }
        status = true
    })
    if (status == true) {
        return contatos
    } else {
        return status
    }
}

console.log(getContato('11966578996'))