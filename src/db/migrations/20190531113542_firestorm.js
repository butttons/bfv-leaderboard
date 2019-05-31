exports.up = async (knex, Promise) => {
    await knex.schema.createTable('firestorm', (table) => {
        table.uuid('user_id').primary();
        table
            .foreign('user_id')
            .references('id')
            .inTable('users');
        table.integer('solo_wins');
        table.integer('solo_losses');
        table.float('solo_win_percentage');
        table.integer('squad_wins');
        table.integer('squad_losses');
        table.float('squad_win_percentage');
        table.integer('time_played');
        table.integer('matches_played');
        table.float('kd_ratio');
        table.integer('kills');
        table.integer('deaths');
        table.integer('downs');
        table.integer('headshots');
        table.integer('revives');
        table.integer('safes');
        table.timestamps(true, true);
    });
};

exports.down = async (knex, Promise) => {
    await knex.schema.dropTable('firestorm');
};
