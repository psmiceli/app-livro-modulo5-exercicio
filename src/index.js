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

// Importação da classe ControllerCliente e chamada ao método das rotas
const ControllerCliente = require('./controllers/controller-cliente.js');
ControllerCliente.rotas(app)

// Importação da classe ControllerLivro e chamada ao método das rotas
const ControllerLivro = require('./controllers/controller-livro.js')
ControllerLivro.rotas(app)