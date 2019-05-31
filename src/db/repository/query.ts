import { db } from '@/db/knex';
import { leaderboardEmbed } from '@/utils/responses';

export const getTop = async (table: string, key: string, limit: number = 10, where = {}) => {
    const selectRows = ['ign', key];
    const result = await db
        .select(selectRows)
        .from(table as string)
        .innerJoin('users', `${table}.user_id`, 'users.id')
        .orderBy(key, 'desc')
        .limit(limit)
        .where(where)
        .debug(true);
    return result;
};

/* 
export const getTop = async <T, K extends keyof T>(table: T | string, key: K) => {
    const selectRows = ['ign', key];
    const result = await db
        .select(selectRows)
        .from(table as string)
        .innerJoin('users', `${table}.user_id`, 'users.id')
        .orderBy(key, 'desc');
    return leaderboardEmbed<T, K>(result, key);
};
 */
