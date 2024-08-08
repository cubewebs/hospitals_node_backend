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
exports.deleteUser = exports.updateUser = exports.getUser = exports.loginUser = exports.registerUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const users_model_1 = __importDefault(require("../models/mysql/users.model"));
const registerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
    try {
        let userExist = (yield users_model_1.default.findOne({ where: { username } })) || (yield users_model_1.default.findOne({ where: { email } }));
        if ((userExist === null || userExist === void 0 ? void 0 : userExist.dataValues.username) === username) {
            return res.status(400).json({ msg: `A user with username ${username} already exist, please insert a different username` });
        }
        else if ((userExist === null || userExist === void 0 ? void 0 : userExist.dataValues.email) === email) {
            return res.status(400).json({ msg: `A user with email ${email} already exist, please insert a different email` });
        }
        else {
            const user = yield users_model_1.default.create({ username, email, password: hashedPassword });
            res.status(200).json({ msg: `The user ${username} has been created successfully`, user });
        }
    }
    catch (error) {
        res.status(404).json({ msg: `There has been an error trying to create the user`, error });
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { username, password } = req.body;
    const userExist = yield users_model_1.default.findOne({ where: { username } });
    if (!userExist) {
        return res.status(400).json({ msg: `The user with username ${username} doesn't exist` });
    }
    try {
        const passwordValid = yield bcryptjs_1.default.compare(password, userExist.password);
        if (!passwordValid) {
            return res.status(400).json({ msg: `The password is invalid` });
        }
        const token = jsonwebtoken_1.default.sign({ username }, (_a = process.env.SECRET_KEY) !== null && _a !== void 0 ? _a : 'HfYs(b5hR@Rg4');
        res.json({ token, userExist });
    }
    catch (error) {
        res.status(404).json({ msg: `There has been an error trying to login the user`, error });
    }
});
exports.loginUser = loginUser;
const getUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield users_model_1.default.findByPk(id);
    console.log(user);
    if (user)
        res.json(user);
    else
        res.status(404).json({ msg: `No user with id: ${id}` });
});
exports.getUser = getUser;
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const user = yield users_model_1.default.findByPk(id);
    try {
        if (!user) {
            res.status(404).json({ msg: `There is no user with the id ${id}` });
        }
        else {
            yield user.update(body);
            res.status(200).json({ msg: `The user with id ${id} has been updated successfully` });
        }
    }
    catch (error) {
        console.log(error);
        res.status(404).json({ msg: `Something went wrong, contact your administrator` });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield users_model_1.default.findByPk(id);
    if (!user) {
        res.status(404).json({ msg: `There is no user with the id ${id}` });
    }
    else {
        yield user.destroy();
        res.json({ msg: `The user with id ${id} has been deleted from the database` });
    }
});
exports.deleteUser = deleteUser;
