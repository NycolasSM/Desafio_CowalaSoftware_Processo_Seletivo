"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// no typescript possui a chamada inferencia de tipo que não precisa definir o tipo inicialmente que ele tentara interpretar
// e definit o tipo, mas é sempre bom definir primeiro
function getUserName() {
    return "testUser";
}
app.use(routes_1.default);
const userName = getUserName();
app.listen(3001);
