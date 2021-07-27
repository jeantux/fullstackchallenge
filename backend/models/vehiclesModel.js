const connection = require('../knex/knex')

function Vehicles() {
    const showAll = async () => {
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

    const show = async (id) => {
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

    return {
        showAll,
        show
    }
}

module.exports = Vehicles