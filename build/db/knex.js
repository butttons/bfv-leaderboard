"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
exports.db = knex_1.default({
    client: 'pg',
    log: {
        error: console.error,
        debug: console.log,
    },
    connection: process.env.DATABASE_URL || {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'postgres',
        database: 'bfv_discord',
        port: 5433,
    },
});
//# sourceMappingURL=knex.js.map