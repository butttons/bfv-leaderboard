exports.up = async (knex, Promise) => {
    await knex.schema.createTable('vehicles', (table) => {
        table
            .uuid('id')
            .primary()
            .defaultTo(knex.raw('uuid_generate_v4()'));
        table.uuid('user_id');
        table
            .foreign('user_id')
            .references('id')
            .inTable('users');
        table.string('code');
        table.index('code');
        table.integer('kills');
        table.float('kills_per_minute');
        table.integer('time_played');
        table.integer('destroyed');
        table.timestamps(true, true);
    });
};

exports.down = async (knex, Promise) => {
    await knex.schema.dropTable('vehicles');
};
