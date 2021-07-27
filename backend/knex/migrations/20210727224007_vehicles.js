
exports.up = function(knex) {
    return knex.schema.createTable('vehicles', function (t) {
        t.increments('id')
        t.string('plate', 7).notNullable()
        t.string('brand', 100).notNullable()
        t.string('model', 100)
        t.string('version', 100)
        t.integer('year').notNullable()

        t.unique('plate')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('vehicles')
};
