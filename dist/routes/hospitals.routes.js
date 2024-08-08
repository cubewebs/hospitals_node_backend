"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const hospitals_controller_1 = require("../controllers/hospitals.controller");
const router = express_1.default.Router();
router.get('/', hospitals_controller_1.getHospitals);
router.get('/:id', hospitals_controller_1.getHospital);
router.delete('/:id', hospitals_controller_1.deleteHospital);
router.post('/', hospitals_controller_1.postHospital);
router.put('/:id', hospitals_controller_1.putHospital);
exports.default = router;
