"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uploads_controller_1 = require("../controllers/uploads.controller");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const router = express_1.default.Router();
router.use((0, express_fileupload_1.default)());
router.put('/:type/:id', uploads_controller_1.uploadFiles);
router.get('/:type/:img', uploads_controller_1.getImage);
exports.default = router;
