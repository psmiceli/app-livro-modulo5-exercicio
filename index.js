//importa o express para a constante
const express = require('express')

//Instancia o express dentro de uma nova constante. Ao fazer isso a constante app, passsa a ter as funcionalidades do express()
const app = express()

//Porta que usaremos para o servidor. Pode ser qualquer outra
const port = 3000

//Função do express que inicia o servidor usando a porta e enviando uma resposta
app.listen(port, (req, res) => {
  console.log(`Servidor rodando na porta ${port}`)
})

// Rota GET Cliente
app.get('/cliente', (req, res) => {
  res.send("Rota GET do Cliente ativada")
})

// Rota GET Livro
app.get('/livro', (req, res) => {
  res.send("Rota GET do Cliente ativada")
})