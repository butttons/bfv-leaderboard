exports.up = async (knex, Promise) => {
    await knex.raw('create extension if not exists "uuid-ossp"');
    await knex.schema.createTable('users', (table) => {
        table
            .uuid('id')
            .primary()
            .defaultTo(knex.raw('uuid_generate_v4()'));
        table.string('ign', 64).unique();
        table.enum('platform', ['xbox', 'psn', 'origin']);
        table.string('avatar', 1024);
        table.datetime('last_updated');
        table.timestamps(true, true);
    });
};

exports.down = async (knex, Promise) => {
    await knex.schema.dropTable('users');
};
