"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
exports.instance = axios_1.default.create({
    baseURL: 'https://api.battlefieldtracker.com/api/v1/bfv/',
});
//# sourceMappingURL=axios.js.map