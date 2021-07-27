const Vehicles = require('../models/vehiclesModel')

module.exports = {
    async showAll(_req, res) {
        try {
            const vehicles = new Vehicles()
            const list = await vehicles.showAll()
            
            res.status(200).send({ vehicles: list })

        } catch (e) {
            res.status(500).send("Error " + e.message)
        }
    },

    async show(req, res) {
        try {
            const { id } = req.params
            const vehicles = new Vehicles()
            const item = await vehicles.show(id)

            res.status(200).send({ vehicle: item })

        } catch (e) {
            res.status(500).send("Error " + e.message)
        }
    }
}