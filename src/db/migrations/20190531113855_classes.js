exports.up = async (knex, Promise) => {
    await knex.schema.createTable('classes', (table) => {
        table
            .uuid('id')
            .primary()
            .defaultTo(knex.raw('uuid_generate_v4()'));
        table.uuid('user_id');
        table
            .foreign('user_id')
            .references('id')
            .inTable('users');
        table.enum('name', ['assault', 'medic', 'pilot', 'recon', 'support', 'tanker']);
        table.index('name');
        table.integer('rank');
        table.integer('deaths');
        table.integer('kills');
        table.float('kills_per_minute');
        table.float('kd_ratio');
        table.integer('time_played');
        table.float('shots_accuracy');
        table.integer('score');
        table.float('score_per_minute');
        table.timestamps(true, true);
    });
};

exports.down = async (knex, Promise) => {
    await knex.schema.dropTable('classes');
};
