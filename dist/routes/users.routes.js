"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("../controllers/users.controller");
const router = express_1.default.Router();
// add the routes like this: router.get('/', getHospitals); and don't forget to import them also
router.post('/', users_controller_1.registerUser);
router.post('/login', users_controller_1.loginUser);
router.get('/:id', users_controller_1.getUser);
router.patch('/:id', users_controller_1.updateUser);
router.delete('/:id', users_controller_1.deleteUser);
exports.default = router;
