"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const hospitals_routes_1 = __importDefault(require("../routes/hospitals.routes"));
const admin_routes_1 = __importDefault(require("../routes/admin.routes"));
const users_routes_1 = __importDefault(require("../routes/users.routes"));
const hospitals_model_1 = __importDefault(require("./mysql/hospitals.model"));
const users_model_1 = __importDefault(require("./mysql/users.model"));
const validate_token_1 = __importDefault(require("../routes/validate-token"));
const uploads_routes_1 = __importDefault(require("../routes/uploads.routes"));
class Server {
    constructor() {
        var _a;
        this.app = (0, express_1.default)();
        this.middlewares();
        this.PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : '3001';
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.PORT, () => {
            console.log(`Server running on port ${this.PORT} endpoint: http://localhost:${this.PORT}`);
        });
    }
    routes() {
        this.app.use('/users', users_routes_1.default);
        this.app.use('/hospitals', validate_token_1.default, hospitals_routes_1.default);
        this.app.use('/admin', validate_token_1.default, admin_routes_1.default);
        this.app.use('/uploads', uploads_routes_1.default);
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield hospitals_model_1.default.sync();
                yield users_model_1.default.sync();
                console.log('Database connected successfully');
            }
            catch (error) {
                console.log('Error connecting to database --> ', error);
            }
        });
    }
}
exports.default = Server;
