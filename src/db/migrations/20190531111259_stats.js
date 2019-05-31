exports.up = async (knex, Promise) => {
    await knex.schema.createTable('stats', (table) => {
        table.uuid('user_id').primary();
        table
            .foreign('user_id')
            .references('id')
            .inTable('users');
        table.float('score_per_minute');
        table.float('kd_ratio');
        table.integer('deaths');
        table.integer('kills');
        table.integer('kills_aggregated');
        table.float('shots_accuracy');
        table.integer('kill_streak');
        table.integer('dogtags_taken');
        table.integer('headshots');
        table.float('longest_headshot');
        table.float('kills_per_minute');
        table.integer('ace_squad');
        table.float('wl_percentage');
        table.integer('wins');
        table.integer('losses');
        table.integer('rounds');
        table.integer('time_played');
        table.timestamps(true, true);
    });
};

exports.down = async (knex, Promise) => {
    await knex.schema.dropTable('stats');
};
