"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var inflect_1 = require("@/utils/inflect");
exports.trackingRows = {
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
exports.allowedTypes = {
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
var getValues = function (keys, inflect) { return function (obj) {
    return keys.reduce(function (acc, key) {
        var dbK = inflect(key);
        acc[key] = obj[dbK].value;
        return acc;
    }, {});
}; };
var getMultiValues = function (getRow, arr, idKey, rowKey) {
    return arr.map(function (val) {
        var _a;
        var key = val[idKey];
        var row = getRow(val);
        return __assign((_a = {}, _a[rowKey] = key, _a), row);
    });
};
var getStats = function (stats) { return getValues(exports.trackingRows.stats, inflect_1.bfKey)(stats); };
var getScore = function (stats) { return getValues(exports.trackingRows.score, inflect_1.scoreKey)(stats); };
var getFirestorm = function (stats) { return getValues(exports.trackingRows.firestorm, inflect_1.bfKey)(stats); };
var getClasses = function (classes) {
    var getRow = getValues(exports.trackingRows.classes, inflect_1.bfKey);
    return getMultiValues(getRow, classes, 'class', 'name');
};
var getWeapons = function (weapons) {
    var getRow = getValues(exports.trackingRows.weapons, inflect_1.bfKey);
    return getMultiValues(getRow, weapons, 'code', 'code');
};
var getVehicles = function (vehicles) {
    var getRow = getValues(exports.trackingRows.vehicles, inflect_1.bfKey);
    return getMultiValues(getRow, vehicles, 'code', 'code');
};
exports.getParts = function (profile) { return __awaiter(_this, void 0, void 0, function () {
    var user, stats, score, firestorm, classes, weapons, vehicles;
    return __generator(this, function (_a) {
        user = {
            ign: profile.platformUserHandle,
            platform: 'origin',
            avatar: profile.avatarUrl,
            last_updated: profile.lastUpdated,
        };
        stats = getStats(profile.data.stats);
        score = getScore(profile.data.stats);
        firestorm = getFirestorm(profile.data.statsFirestorm);
        classes = getClasses(profile.data.classes);
        weapons = getWeapons(profile.data.weapons);
        vehicles = getVehicles(profile.data.vehicles);
        return [2 /*return*/, { user: user, stats: stats, score: score, firestorm: firestorm, classes: classes, weapons: weapons, vehicles: vehicles }];
    });
}); };
//# sourceMappingURL=discord-utils.js.map