"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('module-alias/register');
require('dotenv').config();
var http_1 = __importDefault(require("http"));
var discord_1 = require("./discord");
discord_1.startBot();
http_1.default.createServer(function (req, res) {
    res.write('BFV Discord Leaderboard');
    res.end();
}).listen(process.env.PORT);
//# sourceMappingURL=index.js.map