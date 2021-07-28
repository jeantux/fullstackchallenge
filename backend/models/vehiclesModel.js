const connection = require('../knex/knex')

function Vehicles() {
    this.plate = ''
    this.brand = ''
    this.model = ''
    this.version = ''
    this.year = 0

    this.showAll = async () => {
        try {
            const vehicles = await connection('vehicles')
            .select([
                'id',
                'plate',
                'brand',
                'model',
                'version',
                'year',
            ])

            return Promise.resolve(vehicles)
            
        } catch (e) {
            // reg error in log e.message
            return Promise.reject({message: "fail to get all vehicles!"});            
        }
    }

    this.show = async (id) => {
        try {
            const vehicles = await connection('vehicles')
            .select([
                'id',
                'plate',
                'brand',
                'model',
                'version',
                'year',
            ])
            .where({ id })

            return Promise.resolve(vehicles)
            
        } catch (e) {
            // reg error in log e.message
            return Promise.reject({message: "fail to get all vehicle!"});            
        }
    }

    this.append = async () => {
        try {
            await connection('vehicles')
            .insert({
                plate: this.plate,
                brand: this.brand,
                model: this.model,
                version: this.version,
                year: this.year,
            })

            return Promise.resolve()
            
        } catch (e) {
            // reg error in log e.message
            return Promise.reject({message: e.message});            
        }
    }

    this.update = async () => {
        try {
            await connection('vehicles')
            .update({
                plate: this.plate,
                brand: this.brand,
                model: this.model,
                version: this.version,
                year: this.year,
            })
            .where({ id: this.id })

            return Promise.resolve()
            
        } catch (e) {
            // reg error in log e.message
            return Promise.reject({message: e.message});            
        }
    }

    this.delete = async (id) => {
        try {
            await connection('vehicles')
            .delete()
            .where({ id })

            return Promise.resolve()
            
        } catch (e) {
            // reg error in log e.message
            return Promise.reject({message: e.message});            
        }
    }
}

module.exports = Vehicles