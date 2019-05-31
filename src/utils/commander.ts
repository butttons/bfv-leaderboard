import { embedHelp, embedTop, constraints } from './responses';
import { saveUser } from '@/db/repository/create-update';
export const processText = async (text: string) => {
    const commands = [
        {
            name: 'help',
            regex: /\/help\s?(\w*)/,
            response: (match: string[]) => {
                const [_, type, ...rest] = match;
                return embedHelp(type);
            },
        },
        {
            name: 'leaderboard',
            regex: /\/top (\w+)\s?(\w+)\s?(\w*)\s?(\d*)/,
            response: async (match: string[]) => {
                const [_, type, ...rest] = match;

                const defaultLimit = (limit: string) => (limit === '' ? 10 : +limit);
                if (constraints.single.includes(type)) {
                    const [key, limit] = rest;
                    return embedTop(type, key, defaultLimit(limit));
                } else if (constraints.multi.includes(type)) {
                    const [idKey, key, limit] = rest;
                    return embedTop(type, key, defaultLimit(limit), idKey);
                }
            },
        },
        {
            name: 'add user',
            regex: /\/add (\w+)/,
            response: async (match: string[]) => {
                const [_, ign] = match;
                const resp = await saveUser(ign);
                return resp;
            },
        },
    ];
    const matching = commands.find((command) => command.regex.test(text));
    return matching !== undefined ? await matching.response(text.match(matching.regex)) : false;
};
