const vehiclesController = require('./controllers/vehiclesController')

module.exports = (app) => {
    app.get('/vehicles', vehiclesController.showAll)
    app.get('/vehicles/:id', vehiclesController.show)
    app.post('/vehicles', vehiclesController.append)
}