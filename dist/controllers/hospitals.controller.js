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
exports.putHospital = exports.postHospital = exports.deleteHospital = exports.getHospital = exports.getHospitals = void 0;
const hospitals_model_1 = __importDefault(require("../models/mysql/hospitals.model"));
const getHospitals = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const listHospitals = yield hospitals_model_1.default.findAll();
    res.json(listHospitals);
});
exports.getHospitals = getHospitals;
const getHospital = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const hospital = yield hospitals_model_1.default.findByPk(id);
    if (hospital)
        res.json(hospital);
    else
        res.status(404).json({ msg: `No hospital with id: ${id}` });
});
exports.getHospital = getHospital;
const deleteHospital = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const hospital = yield hospitals_model_1.default.findByPk(id);
    if (!hospital) {
        res.status(404).json({ msg: `No hospital with id: ${id}` });
    }
    else {
        yield hospital.destroy();
        res.json({ msg: `The hospital with id ${id} has been deleted from the database` });
    }
});
exports.deleteHospital = deleteHospital;
const postHospital = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const hospital = yield hospitals_model_1.default.create(body);
        res.status(200).json(hospital);
    }
    catch (error) {
        res.status(404).json({ msg: `There has been an error trying to create the hospital`, error });
    }
});
exports.postHospital = postHospital;
const putHospital = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const hospital = yield hospitals_model_1.default.findByPk(id);
    try {
        if (!hospital) {
            res.status(404).json({ msg: `There is no hospital with the id ${id}` });
        }
        else {
            yield hospital.update(body);
            res.status(200).json({ msg: `The hospital with id ${id} has been updated successfully` });
        }
    }
    catch (error) {
        console.log(error);
        res.status(404).json({ msg: `Something went wrong, contact your administrator` });
    }
});
exports.putHospital = putHospital;
