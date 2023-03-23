
/*****************************************************************************
 * Objetivo: API para alimentar o empresarial chat
 * Data: 18/03/2023
 * Autor: André
 * Versão: 1.0 
 *****************************************************************************/

const express = require('express')

const cors = require('cors')

const bodyParser = require('body-parser')

const app = express()

const empresarialChat = require('./modulo/empresarial-chat.js')

app.use((request, response, next) => {

    response.header('Acess-Control-Allow-Origin', '*')

    response.header('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    app.use(cors())

    next()
})

app.get('/v1/senai/chat/numero/:telefone', cors(), async function(request, response, next) {
    let numeroDeTelefone = request.params.telefone
    let statusCode
    let dadosContato = {}

    if(numeroDeTelefone == '' || numeroDeTelefone == undefined || isNaN(numeroDeTelefone) || numeroDeTelefone != 11){
        statusCode = 400
        dadosContato.message = 'Não foi possivel processar os dados de entrada (número de telefone) que foi enviado não corresponde ao exigido, confira o valor, pois não pode ser vazio, precisa ser numero'
    } else {
        let contatos = empresarialChat.getContato(numeroDeTelefone)

        if(contatos){
            statusCode = 200
            dadosContato = contatos
        } else {
            statusCode = 404
        }
    }
    
    response.status(statusCode)
    response.json(dadosContato)
})

app.listen(8080, () => {console.log('Servidor aguardando requisição na porta 8080.')})