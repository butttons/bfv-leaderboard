exports.up = async (knex, Promise) => {
    await knex.schema.createTable('weapons', (table) => {
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
        table.integer('shots_fired');
        table.integer('shots_hit');
        table.float('shots_accuracy');
        table.integer('headshots');
        table.timestamps(true, true);
    });
};

exports.down = async (knex, Promise) => {
    await knex.schema.dropTable('weapons');
};
