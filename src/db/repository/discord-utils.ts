import { db } from '@/db/knex';
import { Battlefield } from '@/utils/@types-tracker';
import { Database } from './@types-db';
import { bfKey, scoreKey } from '@/utils/inflect';

type InflectFn = (str: string) => string;
type GetRow = (obj: any) => any;

export const trackingRows = {
    stats: [
        'score_per_minute',
        'kd_ratio',
        'deaths',
        'kills',
        'kills_aggregated',
        'shots_accuracy',
        'kill_streak',
        'dogtags_taken',
        'headshots',
        'longest_headshot',
        'kills_per_minute',
        'ace_squad',
        'wl_percentage',
        'wins',
        'losses',
        'rounds',
        'time_played',
    ],
    score: ['general', 'round', 'combat', 'defensive', 'objective', 'bonus', 'squad', 'award', 'assault', 'medic', 'support', 'recon', 'air', 'land', 'tanks', 'transports'],
    firestorm: [
        'solo_wins',
        'solo_losses',
        'solo_win_percentage',
        'squad_wins',
        'squad_losses',
        'squad_win_percentage',
        'time_played',
        'matches_played',
        'kd_ratio',
        'kills',
        'deaths',
        'downs',
        'headshots',
        'revives',
        'safes',
    ],
    classes: ['rank', 'deaths', 'kills', 'kills_per_minute', 'kd_ratio', 'time_played', 'shots_accuracy', 'score', 'score_per_minute'],
    weapons: ['kills', 'kills_per_minute', 'time_played', 'shots_fired', 'shots_hit', 'shots_accuracy', 'headshots'],
    vehicles: ['kills', 'kills_per_minute', 'time_played', 'destroyed'],
};
export const allowedTypes = {
    classes: ['assault', 'medic', 'pilot', 'recon', 'support', 'tanker'],
    weapons: [
        'wtypetsmlesar',
        'wtypecoupe',
        'wtypemp34s1',
        'wtypefp45l',
        'gctthrwgimp',
        'wtypezk383',
        'wtypesm1912',
        'wtyperemm8slr',
        'wtypemg42',
        'gctlgrensmoke',
        'gctthrwgat',
        'wtypeam42',
        'gctdac',
        'wtypebren',
        'wtypew1897sho',
        'wtypekrag',
        'wtypewmkiv',
        'wtypekar98k',
        'wtypegusvolar',
        'gctddyns',
        'gctdfap',
        'wtypersc1918',
        'wtypempickaxe',
        'wtypem30luftd',
        'wtypestg44',
        'gctthrwgfi',
        'wtypesigke7',
        'wtypemasm1944',
        'wtypemhatchet',
        'wtypemshovel',
        'wtypefg42',
        'gcttbin',
        'wtypelewis',
        'gctthrwgsmo',
        'wtypemkukri',
        'gctthrwgfrag',
        'wtypemp28',
        'wtypebauto5',
        'wtypemcricket',
        'wtypem1car',
        'wtypm1911',
        'wtypeg43',
        'gctddecs',
        'wtypetm1928a1',
        'wtyperosssrmk3',
        'gctthrwgsti',
        'wtypesmle4',
        'wtypep08',
        'wtypegewm9530',
        'wtypelugerslr',
        'wtypedarne',
        'wtypemscoutm1916',
        'gctlrpiat',
        'gctthrwkn',
        'wtypew1907ar',
        'wtypegusvolsar',
        'wtyperib1918',
        'wtypmp40',
        'gcttndlssyrg',
        'wtypevickers',
        'gctdtripf',
        'wtypemg34',
        'wtypeemp',
        'wtypewp38',
        'gctdsb',
        'gctdmineat',
        'gctlrpf',
        'wtypems1916',
        'gctlgrenpistol',
        'wtypesten',
        'wtypembrarmyknife',
        'gctlgrenrifle',
        'wtyperuby',
        'wtypeskp31',
        'gctlfla',
        'wtypezh29slr',
    ],
    vehicles: [
        'taPazIV0',
        'taChuGC0',
        'trMH101',
        'plBF109g20',
        'taTigISturm',
        'plSpitfVA0',
        'taValMkVIII0',
        'taChuCro',
        'taStagT17E10',
        'plBlenMKIF0',
        'trKett',
        'taValAA0',
        'trPakWag',
        'taSturmIV0',
        'plBF109g60',
        'trMzV70',
        'plJU88a0',
        'taFlakpIV0',
        'plBlenMKI0',
        'plMosMKII0',
        'trKub',
        'plMosMKVI0',
        'taChuMkVII0',
        'trAvant',
        'trSchwim',
        'trT48GMC',
        'plSpitfVB0',
        'plStukaB20',
        'taPnz380',
        'taValArch0',
        'plStukaB10',
        'trUniCarrier',
        'trSdKfz',
        'trM3Halft',
        'plC47',
        'taTigI0',
        'plJU88c0',
    ],
};
const getValues = (keys: string[], inflect: InflectFn) => (obj: any) => {
    return keys.reduce((acc, key) => {
        const dbK = inflect(key);
        acc[key] = obj[dbK].value;
        return acc;
    }, {});
};
const getMultiValues = (getRow: GetRow, arr: any[], idKey: string, rowKey: string) => {
    return arr.map((val) => {
        const key = val[idKey];
        const row = getRow(val);
        return {
            [rowKey]: key,
            ...row,
        };
    });
};
const getStats = (stats: Battlefield.Stats): Database.Stats => getValues(trackingRows.stats, bfKey)(stats) as Database.Stats;
const getScore = (stats: Battlefield.Stats): Database.Score => getValues(trackingRows.score, scoreKey)(stats) as Database.Score;
const getFirestorm = (stats: Battlefield.StatsFirestorm): Database.Firestorm => getValues(trackingRows.firestorm, bfKey)(stats) as Database.Firestorm;

const getClasses = (classes: Battlefield.Class[]): Database.Class[] => {
    const getRow = getValues(trackingRows.classes, bfKey);
    return getMultiValues(getRow, classes, 'class', 'name') as Database.Class[];
};
const getWeapons = (weapons: Battlefield.Weapon[]): Database.Weapon[] => {
    const getRow = getValues(trackingRows.weapons, bfKey);
    return getMultiValues(getRow, weapons, 'code', 'code') as Database.Weapon[];
};
const getVehicles = (vehicles: Battlefield.Vehicle[]): Database.Vehicle[] => {
    const getRow = getValues(trackingRows.vehicles, bfKey);
    return getMultiValues(getRow, vehicles, 'code', 'code') as Database.Vehicle[];
};
export interface ProfileParts {
    user: Database.User;
    stats: Database.Stats;
    score: Database.Score;
    firestorm: Database.Firestorm;
    classes: Database.Class[];
    weapons: Database.Weapon[];
    vehicles: Database.Vehicle[];
}
export const getParts = async (profile: Battlefield.Profile): Promise<ProfileParts> => {
    const user: Database.User = {
        ign: profile.platformUserHandle,
        platform: 'origin',
        avatar: profile.avatarUrl,
        last_updated: profile.lastUpdated,
    };
    const stats = getStats(profile.data.stats);
    const score = getScore(profile.data.stats);
    const firestorm = getFirestorm(profile.data.statsFirestorm);
    const classes = getClasses(profile.data.classes);
    const weapons = getWeapons(profile.data.weapons);
    const vehicles = getVehicles(profile.data.vehicles);
    return { user, stats, score, firestorm, classes, weapons, vehicles };
};
