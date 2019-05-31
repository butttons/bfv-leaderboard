"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inflection_1 = __importDefault(require("inflection"));
exports.dbKey = function (str) { return inflection_1.default.underscore(str); };
exports.bfKey = function (str) { return inflection_1.default.camelize(str, true); };
exports.scoreKey = function (str) { return "score" + inflection_1.default.capitalize(str); };
//# sourceMappingURL=inflect.js.map