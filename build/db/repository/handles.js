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
var knex_1 = require("@/db/knex");
var tracker_1 = require("@/utils/tracker");
var utils_1 = require("@/db/repository/utils");
exports.getUser = function (ign) { return __awaiter(_this, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, knex_1.db
                    .select('*')
                    .from('public.users')
                    .where({ ign: ign })];
            case 1:
                user = _a.sent();
                return [2 /*return*/, user.length === 0 ? [null, false] : [user[0], true]];
        }
    });
}); };
var insertInfo = function (userId) { return function (table, row) { return __awaiter(_this, void 0, void 0, function () {
    var insert;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                insert = __assign({ user_id: userId }, row);
                return [4 /*yield*/, knex_1.db.insert(insert).into("public." + table)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); }; };
var insertMultiInfo = function (userId) { return function (table, row) { return __awaiter(_this, void 0, void 0, function () {
    var insert;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                insert = row.map(function (r) { return (__assign({ user_id: userId }, r)); });
                return [4 /*yield*/, knex_1.db.insert(insert).into("public." + table)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); }; };
var updateInfo = function (userId) { return function (table, row) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, knex_1.db
                    .update(row)
                    .where({ user_id: userId })
                    .table("public." + table)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); }; };
var updateMultiInfo = function (userId) { return function (table, rows, idKey) { return __awaiter(_this, void 0, void 0, function () {
    var updates;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                updates = rows.map(function (row) {
                    var _a;
                    var whereAt = (_a = { user_id: userId }, _a[idKey] = row[idKey], _a);
                    return knex_1.db
                        .update(row)
                        .where(whereAt)
                        .table("public." + table);
                });
                return [4 /*yield*/, Promise.all(updates)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); }; };
var newUser = function (parts) { return __awaiter(_this, void 0, void 0, function () {
    var userId, insertChunk, insertChunks;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, knex_1.db
                    .insert(parts.user)
                    .into('public.users')
                    .returning('id')];
            case 1:
                userId = (_a.sent())[0];
                insertChunk = insertInfo(userId);
                return [4 /*yield*/, insertChunk('stats', parts.stats)];
            case 2:
                _a.sent();
                return [4 /*yield*/, insertChunk('scores', parts.score)];
            case 3:
                _a.sent();
                return [4 /*yield*/, insertChunk('firestorm', parts.firestorm)];
            case 4:
                _a.sent();
                insertChunks = insertMultiInfo(userId);
                return [4 /*yield*/, insertChunks('classes', parts.classes)];
            case 5:
                _a.sent();
                return [4 /*yield*/, insertChunks('weapons', parts.weapons)];
            case 6:
                _a.sent();
                return [4 /*yield*/, insertChunks('vehicles', parts.vehicles)];
            case 7:
                _a.sent();
                return [2 /*return*/, userId];
        }
    });
}); };
var updateUser = function (userId, parts) { return __awaiter(_this, void 0, void 0, function () {
    var updateChunk, updateChunks;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                updateChunk = updateInfo(userId);
                return [4 /*yield*/, updateChunk('stats', parts.stats)];
            case 1:
                _a.sent();
                return [4 /*yield*/, updateChunk('scores', parts.score)];
            case 2:
                _a.sent();
                return [4 /*yield*/, updateChunk('firestorm', parts.firestorm)];
            case 3:
                _a.sent();
                updateChunks = updateMultiInfo(userId);
                return [4 /*yield*/, updateChunks('classes', parts.classes, 'name')];
            case 4:
                _a.sent();
                return [4 /*yield*/, updateChunks('weapons', parts.weapons, 'code')];
            case 5:
                _a.sent();
                return [4 /*yield*/, updateChunks('vehicles', parts.vehicles, 'code')];
            case 6:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.saveUser = function (ign) { return __awaiter(_this, void 0, void 0, function () {
    var _a, user, hasUser, _b, stats, hasStats, parts, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, exports.getUser(ign)];
            case 1:
                _a = _d.sent(), user = _a[0], hasUser = _a[1];
                return [4 /*yield*/, tracker_1.getStats(ign)];
            case 2:
                _b = _d.sent(), stats = _b[0], hasStats = _b[1];
                return [4 /*yield*/, utils_1.getParts(stats)];
            case 3:
                parts = _d.sent();
                if (!!hasUser) return [3 /*break*/, 5];
                return [4 /*yield*/, newUser(parts)];
            case 4:
                _c = _d.sent();
                return [3 /*break*/, 7];
            case 5: return [4 /*yield*/, updateUser(user.id, parts)];
            case 6:
                _c = _d.sent();
                _d.label = 7;
            case 7:
                _c;
                return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=handles.js.map