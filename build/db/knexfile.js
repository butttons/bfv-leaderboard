// Update with your config settings.
module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            host: '127.0.0.1',
            user: 'postgres',
            password: 'postgres',
            database: 'bfv_discord',
            port: 5433,
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: 'migrations',
        },
    },
    production: {
        client: 'postgresql',
        connection: process.env.DATABASE_URL,
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },
};
//# sourceMappingURL=knexfile.js.map