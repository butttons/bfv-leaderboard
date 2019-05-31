"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var inflection_1 = __importDefault(require("inflection"));
var discord_utils_1 = require("@/db/repository/discord-utils");
var query_1 = require("@/db/repository/query");
exports.constraints = {
    single: ['stats', 'score', 'firestorm'],
    multi: ['classes', 'weapons', 'vehicles'],
};
exports.response = function (text, embed) {
    if (embed === void 0) { embed = false; }
    if (!embed) {
        return text;
    }
    else {
        return {
            content: text,
            embed: embed,
        };
    }
};
var leaderboard = {
    title: function (limit, key, tableKey) { return "Top " + limit + " " + key + " (" + tableKey + ")"; },
    timestamp: function () { return new Date().toISOString(); },
    footer: function (key, tableKey) { return ({
        text: "BFV - " + key + " (" + tableKey + ")",
    }); },
    thumbnail: function (url) { return ({
        url: url,
    }); },
    author: function (icon_url, name) {
        if (name === void 0) { name = 'BFV Leaderboard'; }
        return ({
            name: name,
            icon_url: icon_url,
        });
    },
    fields: function (players, key) {
        return players.map(function (player, index) {
            var val = Number(player[key]).toFixed(2);
            return {
                name: "#" + (index + 1) + " " + player.ign,
                value: key + ": " + val,
            };
        });
    },
};
exports.leaderboardEmbed = function (players, key, limit, titleKey) {
    if (limit === void 0) { limit = 10; }
    if (titleKey === void 0) { titleKey = 'Leaderboard'; }
    var humanKey = inflection_1.default.humanize(key);
    var tableKey = inflection_1.default.humanize(titleKey);
    var iconUrl = 'https://cdn.discordapp.com/embed/avatars/0.png';
    return exports.response('Leaderboard', {
        title: leaderboard.title(limit, humanKey, tableKey),
        color: 3066696,
        timestamp: leaderboard.timestamp(),
        footer: leaderboard.footer(humanKey, tableKey),
        thumbnail: leaderboard.thumbnail(iconUrl),
        author: leaderboard.author(iconUrl),
        fields: leaderboard.fields(players, key),
    });
};
var defaultHelp = function () { return ({
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
            icon_url: 'https://cdn.discordapp.com/embed/avatars/0.png',
        },
        fields: [
            {
                name: 'Leaderboard',
                value: 'Usage: ``/top [type] [type key] [sort key] [limit]``\n\n[type]: ``stats``, ``score``, ``firestorm``, ``classes``, ``weapons``, ``vehicles``\n[type key]: ``/help [type]``\n[sort key]: ``/help [type]``\n[limit]: ``number``',
            },
        ],
    },
}); };
var help = {
    fields: function (key, sortKeys, idKeys) {
        var ret = [];
        if (exports.constraints.single.includes(key)) {
            ret.push({
                name: "Leaderboard - " + key,
                value: "Usage: /top " + key + " [sort key] [limit]",
            });
        }
        else if (exports.constraints.multi.includes(key)) {
            ret.push({
                name: "Leaderboard - " + key,
                value: "Usage: /top " + key + " [type key] [sort key] [limit]",
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
var helpText = function (key, sortKeys, idKeys) {
    var ret = {
        content: 'Help',
        embed: {
            title: "Help - " + key,
            color: 1066696,
            timestamp: new Date().toISOString(),
            footer: {
                text: "BFV - " + key,
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
exports.embedHelp = function (type) { return __awaiter(_this, void 0, void 0, function () {
    var output;
    return __generator(this, function (_a) {
        switch (type) {
            case 'stats':
                output = helpText('stats', discord_utils_1.trackingRows.stats);
                break;
            case 'firestorm':
                output = helpText('firestorm', discord_utils_1.trackingRows.firestorm);
                break;
            case 'score':
                output = helpText('score', discord_utils_1.trackingRows.score);
                break;
            case 'classes':
                output = helpText('classes', discord_utils_1.trackingRows.classes, discord_utils_1.allowedTypes.classes);
                break;
            case 'weapons':
                output = helpText('weapons', discord_utils_1.trackingRows.weapons, discord_utils_1.allowedTypes.weapons);
                break;
            case 'vehicles':
                output = helpText('weapons', discord_utils_1.trackingRows.vehicles, discord_utils_1.allowedTypes.vehicles);
                break;
            default:
                output = defaultHelp();
        }
        return [2 /*return*/, output];
    });
}); };
var singleTop = function (tableName, trackingKey) {
    if (trackingKey === void 0) { trackingKey = tableName; }
    return function (key, limit) {
        if (limit === void 0) { limit = 10; }
        return __awaiter(_this, void 0, void 0, function () {
            var players;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!discord_utils_1.trackingRows[trackingKey].includes(key)) {
                            return [2 /*return*/, exports.response("Invalid key **" + key + "** for " + trackingKey)];
                        }
                        if (limit > 30) {
                            return [2 /*return*/, exports.response('Please limit to maximum 30 players')];
                        }
                        return [4 /*yield*/, query_1.getTop(tableName, key, limit)];
                    case 1:
                        players = _a.sent();
                        return [2 /*return*/, exports.leaderboardEmbed(players, key, limit, tableName)];
                }
            });
        });
    };
};
var multiTop = function (tableName, trackingKey) {
    if (trackingKey === void 0) { trackingKey = tableName; }
    return function (rowKey, idKey, key, limit) {
        if (limit === void 0) { limit = 10; }
        return __awaiter(_this, void 0, void 0, function () {
            var humanTableName, players;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        humanTableName = inflection_1.default.humanize(tableName);
                        if (!discord_utils_1.allowedTypes[trackingKey].includes(idKey)) {
                            return [2 /*return*/, exports.response("Invalid type **" + idKey + "** for " + tableName)];
                        }
                        if (!discord_utils_1.trackingRows[trackingKey].includes(key)) {
                            return [2 /*return*/, exports.response("Invalid key **" + key + "** for " + tableName)];
                        }
                        return [4 /*yield*/, query_1.getTop(tableName, key, limit, (_a = {}, _a[rowKey] = idKey, _a))];
                    case 1:
                        players = _b.sent();
                        return [2 /*return*/, exports.leaderboardEmbed(players, key, limit, humanTableName + " - " + idKey)];
                }
            });
        });
    };
};
exports.statsTop = function (key, limit) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, singleTop('stats')(key, limit)];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); };
exports.firestormTop = function (key, limit) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, singleTop('firestorm')(key, limit)];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); };
exports.scoreTop = function (key, limit) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, singleTop('scores', 'score')(key, limit)];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); };
exports.classTop = function (idKey, key, limit) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, multiTop('classes')('name', idKey, key, limit)];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); };
exports.weaponTop = function (idKey, key, limit) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, multiTop('weapons')('code', idKey, key, limit)];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); };
exports.vehicleTop = function (idKey, key, limit) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, multiTop('vehicles')('code', idKey, key, limit)];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); };
exports.embedTop = function (type, key, limit, idKey) {
    if (limit === void 0) { limit = 10; }
    return __awaiter(_this, void 0, void 0, function () {
        var output, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (key === '') {
                        return [2 /*return*/, exports.response('Need a sort key')];
                    }
                    _a = type;
                    switch (_a) {
                        case 'stats': return [3 /*break*/, 1];
                        case 'firestorm': return [3 /*break*/, 3];
                        case 'score': return [3 /*break*/, 5];
                        case 'classes': return [3 /*break*/, 7];
                        case 'weapons': return [3 /*break*/, 9];
                        case 'vehicles': return [3 /*break*/, 11];
                    }
                    return [3 /*break*/, 13];
                case 1: return [4 /*yield*/, exports.statsTop(key, limit)];
                case 2:
                    output = _b.sent();
                    return [3 /*break*/, 14];
                case 3: return [4 /*yield*/, exports.firestormTop(key, limit)];
                case 4:
                    output = _b.sent();
                    return [3 /*break*/, 14];
                case 5: return [4 /*yield*/, exports.statsTop(key, limit)];
                case 6:
                    output = _b.sent();
                    return [3 /*break*/, 14];
                case 7: return [4 /*yield*/, exports.classTop(idKey, key, limit)];
                case 8:
                    output = _b.sent();
                    return [3 /*break*/, 14];
                case 9: return [4 /*yield*/, exports.weaponTop(idKey, key, limit)];
                case 10:
                    output = _b.sent();
                    return [3 /*break*/, 14];
                case 11: return [4 /*yield*/, exports.vehicleTop(idKey, key, limit)];
                case 12:
                    output = _b.sent();
                    return [3 /*break*/, 14];
                case 13:
                    output = exports.response('Could not understand the command, sorry');
                    _b.label = 14;
                case 14: return [2 /*return*/, output];
            }
        });
    });
};
//# sourceMappingURL=responses.js.map