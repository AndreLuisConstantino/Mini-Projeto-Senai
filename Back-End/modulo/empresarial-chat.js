
/*****************************************************************************
 * Objetivo: Retornar diversos valores de JSON filtrados para uma API para o empresarial chat
 * Data: 10/03/2023
 * Autor: André
 * Versão: 1.0 
 *****************************************************************************/

var arquivoContatosConversas = require('./contatos.js')

const getContato = function (numeroDoContato) {
    let jsonListaDeConversa = {}
    let status = false
    let conversa = []

    arquivoContatosConversas.contatos['whats-users'].forEach(function (usuario) {
        if (arquivoContatosConversas.contatos['whats-users'].number == numeroDoContato) {
            usuario.contacts.forEach(function (contato) {
                jsonListaDeConversa.name = contato.name
                jsonListaDeConversa.description = contato.description
                jsonListaDeConversa.image = contato.image
            })

        }
    })
}