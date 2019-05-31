exports.up = async (knex, Promise) => {
    await knex.schema.createTable('scores', (table) => {
        table.uuid('user_id').primary();
        table
            .foreign('user_id')
            .references('id')
            .inTable('users');
        table.integer('round');
        table.integer('general');
        table.integer('combat');
        table.integer('defensive');
        table.integer('objective');
        table.integer('bonus');
        table.integer('squad');
        table.integer('award');
        table.integer('assault');
        table.integer('medic');
        table.integer('support');
        table.integer('recon');
        table.integer('air');
        table.integer('land');
        table.integer('tanks');
        table.integer('transports');
        table.timestamps(true, true);
    });
};

exports.down = async (knex, Promise) => {
    await knex.schema.dropTable('scores');
};
