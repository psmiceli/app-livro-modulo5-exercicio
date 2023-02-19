
//ROTA CLIENTE
class ControllerCliente {
  static rotas(app) {
    //rota GET
    app.get('/cliente', (req, res) => {
      res.send("Rota GET do Cliente ativada")
    })
    //rota POST
    app.post('/cliente', (req, res) => {
      res.send('Rota POST do Cliente ativada')
    })
  }
}

module.exports = ControllerCliente
