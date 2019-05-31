import inflection from 'inflection';
import { trackingRows, allowedTypes } from '@/db/repository/discord-utils';
import { getTop } from '@/db/repository/query';

export const constraints = {
    single: ['stats', 'score', 'firestorm'],
    multi: ['classes', 'weapons', 'vehicles'],
};
export const response = (text: string, embed: any = false) => {
    if (!embed) {
        return text;
    } else {
        return {
            content: text,
            embed,
        };
    }
};
type LeaderboardRow = {
    ign: string;
} & {
    [key: string]: number;
};

const leaderboard = {
    title: (limit: number, key: string, tableKey: string) => `Top ${limit} ${key} (${tableKey})`,
    timestamp: () => new Date().toISOString(),
    footer: (key: string, tableKey: string) => ({
        text: `BFV - ${key} (${tableKey})`,
    }),
    thumbnail: (url: string) => ({
        url,
    }),
    author: (icon_url: string, name: string = 'BFV Leaderboard') => ({
        name,
        icon_url,
        url: 'https://github.com/butttons/bfv-leaderboard',
    }),
    fields: (players: LeaderboardRow[], key: string) =>
        players.map((player, index) => {
            const val = Number(player[key]).toFixed(2);
            return {
                name: `#${index + 1} ${player.ign}`,
                value: `${key}: ${val}`,
            };
        }),
};

export const leaderboardEmbed = (players: LeaderboardRow[], key: string, limit: number = 10, titleKey = 'Leaderboard') => {
    const humanKey = inflection.humanize(key as string);
    const tableKey = inflection.humanize(titleKey);
    const iconUrl = 'https://cdn.discordapp.com/embed/avatars/0.png';
    return response('Leaderboard', {
        title: leaderboard.title(limit, humanKey, tableKey),
        color: 3066696,
        timestamp: leaderboard.timestamp(),
        footer: leaderboard.footer(humanKey, tableKey),
        thumbnail: leaderboard.thumbnail(iconUrl),
        author: leaderboard.author(iconUrl),
        fields: leaderboard.fields(players, key as string),
    });
};

const defaultHelp = () => ({
    content: 'Help',
    embed: {
        title: 'Help',
        color: 1066696,
        timestamp: '2019-05-31T15:48:06.781Z',
        footer: {
            text: 'BFV - Help',
        },
        author: {
            name: 'BFV Leaderboard',
            url: 'https://github.com/butttons/bfv-leaderboard',
            icon_url: 'https://cdn.discordapp.com/embed/avatars/0.png',
        },
        fields: [
            {
                name: 'Leaderboard',
                value:
                    'Usage: ``/top [type] [type key] [sort key] [limit]``\n\n[type]: ``stats``, ``score``, ``firestorm``, ``classes``, ``weapons``, ``vehicles``\n[type key]: ``/help [type]``\n[sort key]: ``/help [type]``\n[limit]: ``number``',
            },
            {
                name: 'Add user',
                value: 'Usage: ``/add [ign]`',
            },
        ],
    },
});
const help = {
    fields: (key: string, sortKeys: string[], idKeys?: string[]) => {
        const ret = [];
        if (constraints.single.includes(key)) {
            ret.push({
                name: `Leaderboard - ${key}`,
                value: `Usage: /top ${key} [sort key] [limit]`,
            });
        } else if (constraints.multi.includes(key)) {
            ret.push({
                name: `Leaderboard - ${key}`,
                value: `Usage: /top ${key} [type key] [sort key] [limit]`,
            });
            ret.push({
                name: 'Type keys',
                value: idKeys.join(', '),
            });
        }
        ret.push({
            name: 'Sort keys',
            value: sortKeys.join(', '),
        });
        return ret;
    },
};
const helpText = (key: string, sortKeys: string[], idKeys?: string[]) => {
    const ret = {
        content: 'Help',
        embed: {
            title: `Help - ${key}`,
            color: 1066696,
            timestamp: new Date().toISOString(),
            footer: {
                text: `BFV - ${key}`,
            },
            author: {
                name: 'BFV Leaderboard',
                icon_url: 'https://cdn.discordapp.com/embed/avatars/0.png',
            },
            fields: help.fields(key, sortKeys, idKeys),
        },
    };
    return ret;
};
export const embedHelp = async (type: string) => {
    let output: any;
    switch (type) {
        case 'stats':
            output = helpText('stats', trackingRows.stats);
            break;
        case 'firestorm':
            output = helpText('firestorm', trackingRows.firestorm);
            break;
        case 'score':
            output = helpText('score', trackingRows.score);
            break;
        case 'classes':
            output = helpText('classes', trackingRows.classes, allowedTypes.classes);
            break;
        case 'weapons':
            output = helpText('weapons', trackingRows.weapons, allowedTypes.weapons);
            break;
        case 'vehicles':
            output = helpText('weapons', trackingRows.vehicles, allowedTypes.vehicles);
            break;
        default:
            output = defaultHelp();
    }
    return output;
};

const singleTop = (tableName: string, trackingKey: string = tableName) => async (key: string, limit: number = 10) => {
    if (!trackingRows[trackingKey].includes(key)) {
        return response(`Invalid key **${key}** for ${trackingKey}`);
    }
    if (limit > 30) {
        return response('Please limit to maximum 30 players');
    }
    const players = await getTop(tableName, key, limit);
    return leaderboardEmbed(players, key, limit, tableName);
};
const multiTop = (tableName: string, trackingKey: string = tableName) => async (rowKey: string, idKey: string, key: string, limit: number = 10) => {
    const humanTableName = inflection.humanize(tableName);
    if (!allowedTypes[trackingKey].includes(idKey)) {
        return response(`Invalid type **${idKey}** for ${tableName}`);
    }
    if (!trackingRows[trackingKey].includes(key)) {
        return response(`Invalid key **${key}** for ${tableName}`);
    }
    const players = await getTop(tableName, key, limit, { [rowKey]: idKey });
    return leaderboardEmbed(players, key, limit, `${humanTableName} - ${idKey}`);
};

export const statsTop = async (key: string, limit: number) => await singleTop('stats')(key, limit);
export const firestormTop = async (key: string, limit: number) => await singleTop('firestorm')(key, limit);
export const scoreTop = async (key: string, limit: number) => await singleTop('scores', 'score')(key, limit);

export const classTop = async (idKey: string, key: string, limit: number) => await multiTop('classes')('name', idKey, key, limit);
export const weaponTop = async (idKey: string, key: string, limit: number) => await multiTop('weapons')('code', idKey, key, limit);
export const vehicleTop = async (idKey: string, key: string, limit: number) => await multiTop('vehicles')('code', idKey, key, limit);

export const embedTop = async (type: string, key: string, limit: number = 10, idKey?: string) => {
    if (key === '') {
        return response('Need a sort key');
    }
    let output: any;
    switch (type) {
        case 'stats':
            output = await statsTop(key, limit);
            break;
        case 'firestorm':
            output = await firestormTop(key, limit);
            break;
        case 'score':
            output = await statsTop(key, limit);
            break;
        case 'classes':
            output = await classTop(idKey, key, limit);
            break;
        case 'weapons':
            output = await weaponTop(idKey, key, limit);
            break;
        case 'vehicles':
            output = await vehicleTop(idKey, key, limit);
            break;
        default:
            output = response('Could not understand the command, sorry');
    }
    return output;
};
