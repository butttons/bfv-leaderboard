require('module-alias/register');
require('dotenv').config();

import http from 'http';
import { startBot } from './discord';
startBot();
http.createServer((req, res) => {
    res.write('BFV Discord Leaderboard');
    res.end();
}).listen(process.env.PORT);
