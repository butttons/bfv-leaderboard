import { db } from '@/db/knex';
import { getStats } from '@/utils/tracker';
import { getParts, ProfileParts } from '@/db/repository/discord-utils';
import { response } from '@/utils/responses';

export const getUser = async (ign: string) => {
    const user = await db
        .select('*')
        .from('public.users')
        .where({ ign });
    return user.length === 0 ? [null, false] : [user[0], true];
};

const insertInfo = (userId: string) => async (table: string, row: any) => {
    const insert = {
        user_id: userId,
        ...row,
    };
    await db.insert(insert).into(`public.${table}`);
};

const insertMultiInfo = (userId: string) => async (table: string, row: any) => {
    const insert = row.map((r: any) => ({ user_id: userId, ...r }));
    await db.insert(insert).into(`public.${table}`);
};

const updateInfo = (userId: string) => async (table: string, row: any) => {
    await db
        .update(row)
        .where({ user_id: userId })
        .table(`public.${table}`);
};

const updateMultiInfo = (userId: string) => async (table: string, rows: any, idKey: string) => {
    const updates = rows.map((row: any) => {
        const whereAt = { user_id: userId, [idKey]: row[idKey] };
        return db
            .update(row)
            .where(whereAt)
            .table(`public.${table}`);
    });
    await Promise.all(updates);
};

const newUser = async (parts: ProfileParts) => {
    const [userId] = await db
        .insert(parts.user)
        .into('public.users')
        .returning('id');

    const insertChunk = insertInfo(userId);
    await insertChunk('stats', parts.stats);
    await insertChunk('scores', parts.score);
    await insertChunk('firestorm', parts.firestorm);

    const insertChunks = insertMultiInfo(userId);
    await insertChunks('classes', parts.classes);
    await insertChunks('weapons', parts.weapons);
    await insertChunks('vehicles', parts.vehicles);
    return userId;
};

const updateUser = async (userId: string, parts: ProfileParts) => {
    const updateChunk = updateInfo(userId);
    await updateChunk('stats', parts.stats);
    await updateChunk('scores', parts.score);
    await updateChunk('firestorm', parts.firestorm);

    const updateChunks = updateMultiInfo(userId);
    await updateChunks('classes', parts.classes, 'name');
    await updateChunks('weapons', parts.weapons, 'code');
    await updateChunks('vehicles', parts.vehicles, 'code');
};

export const saveUser = async (ign: string) => {
    const [user, hasUser] = await getUser(ign);
    const [stats, hasStats] = await getStats(ign);
    if (!hasStats) {
        return response(`User **${ign}** not found`);
    }
    const parts = await getParts(stats);
    !hasUser ? await newUser(parts) : await updateUser(user.id, parts);
    return response(`User **${ign}** saved`);
};
