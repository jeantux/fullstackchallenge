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
    },

    async append(req, res) {
        try {
            const { plate, brand, model, version, year } = req.body

            const vehicles = new Vehicles()
            vehicles.plate = plate
            vehicles.brand = brand
            vehicles.model = model
            vehicles.version = version
            vehicles.year = year
            await vehicles.append()

            res.status(200).send({status: true, message: "new vehicle added!"})

        } catch (e) {
            res.status(500).send("Error " + e.message)
        }
    },

    async update(req, res) {
        try {
            const { id, plate, brand, model, version, year } = req.body

            const vehicles = new Vehicles()
            vehicles.id = id
            vehicles.plate = plate
            vehicles.brand = brand
            vehicles.model = model
            vehicles.version = version
            vehicles.year = year
            await vehicles.update()

            res.status(200).send({ status: true, message: "vehicle updated with success!" })

        } catch (e) {
            res.status(500).send("Error " + e.message)
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params
            const vehicles = new Vehicles()
            await vehicles.delete(id)

            res.status(200).send('Vehicle delete with success!')

        } catch (e) {
            res.status(500).send("Error " + e.message)
        }
    }
}