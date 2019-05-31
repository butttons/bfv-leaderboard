require('module-alias/register');
require('dotenv').config();
import { startBot } from './discord';
(async () => {
    startBot();
})();
