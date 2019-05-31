import knex from 'knex';

export const db = knex({
    client: 'pg',
    log: {
        error: console.error,
        debug: console.log,
    },
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'postgres',
        database: 'bfv_discord',
        port: 5433,
    },
});
