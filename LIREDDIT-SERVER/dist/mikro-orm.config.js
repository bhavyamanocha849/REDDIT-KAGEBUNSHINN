"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const constants_1 = require("./constants");
const Posts_1 = require("./entities/Posts");
exports.default = {
    migrations: {
        path: path_1.default.join(__dirname, "./migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/
    },
    entities: [Posts_1.Posts],
    user: 'postgres',
    password: 'postgres',
    dbName: "lireddit",
    type: "postgresql",
    debug: !constants_1.__prod__
};
//# sourceMappingURL=mikro-orm.config.js.map