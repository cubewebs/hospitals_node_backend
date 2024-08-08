"use strict";
// ruta: /uploads/:type/:id
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
exports.getImage = exports.uploadFiles = void 0;
const uuid_1 = require("uuid");
const update_image_1 = require("../helpers/update-image");
const node_path_1 = __importDefault(require("node:path"));
const uploadFiles = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { type, id } = req.params;
    const validTypes = ['hospitals', 'users', 'doctors'];
    if (!validTypes.includes(type)) {
        return res.status(400).json({
            ok: false,
            msg: 'Invalid type'
        });
    }
    // We validate that there are files in the request
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            ok: false,
            msg: 'No files were selected to be uploaded'
        });
    }
    // Proccess the files
    const file = req.files.image;
    const splitName = file.name.split('.');
    const extension = splitName[splitName.length - 1];
    //Validate extension
    const validExtensions = ['png', 'jpg', 'jpeg', 'gif'];
    if (!validExtensions.includes(extension)) {
        return res.status(400).json({
            ok: false,
            msg: 'Invalid extension'
        });
    }
    // Generate the name of the file
    const fileName = `${(0, uuid_1.v4)()}.${extension}`;
    // Upload the file
    const path = `src/uploads/${type}/${fileName}`;
    file.mv(path, (err) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                ok: false,
                msg: 'Error uploading file'
            });
        }
        // Update database
        (0, update_image_1.updateImage)(type, id, fileName);
        // Save the path in the database
        res.json({
            ok: true,
            msg: 'File uploaded',
            fileName
        });
    });
});
exports.uploadFiles = uploadFiles;
const getImage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { type, img } = req.params;
    const pathImg = node_path_1.default.join(__dirname, '..', '..', `src/uploads/${type}/${img}`);
    res.sendFile(pathImg);
});
exports.getImage = getImage;
