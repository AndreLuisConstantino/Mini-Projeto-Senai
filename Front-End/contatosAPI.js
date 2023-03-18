'use strict'

export const pegarContatos = async (numeroDeTelefone) => {

    const url = `http://localhost:8080/v1/senai/chat/${numeroDeTelefone}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}