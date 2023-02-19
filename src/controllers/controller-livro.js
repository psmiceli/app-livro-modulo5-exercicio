
//ROTA LIVRO
class ControllerLivro {
  static rotas(app) {
    //rota GET
    app.get('/livro', (req, res) => {
      res.send("Rota GET do Livro ativada")
    })

    //rota POST
    app.post('/livro', (req, res) => {
      res.send('Rota POST do Livro ativada')
    })
  }
}

module.exports = ControllerLivro
