
//ROTA CLIENTE
class ControllerCliente {
  static rotas(app) {
    app.get('/cliente', (req, res) => {
      res.send("Rota GET do Cliente ativada")
    })
  }
}

module.exports = ControllerCliente
