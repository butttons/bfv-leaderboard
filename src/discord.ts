import Discord from 'discord.js';
import { processText } from './utils/commander';
export const client = new Discord.Client();

client.once('ready', () => {
    console.log('Discord bot ready!');
});
client.on('message', async (message) => {
    const text = message.content;
    const response = await processText(text);
    if (response) {
        message.channel.send(response);
    }
});
export const startBot = () => client.login(process.env.DISCORD_BOT_TOKEN);
export const installUrl = () => `https://discordapp.com/oauth2/authorize?client_id=${process.env.DISCORD_CLIENT_ID}&scope=bot`;
