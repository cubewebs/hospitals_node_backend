import express from "express";
import {
    deleteHospital,
    getHospital,
    getHospitals,
    postHospital,
    putHospital
} from "../controllers/hospitals.controller";

const router = express.Router();

router.get('/', getHospitals);
router.get('/:id', getHospital);
router.delete('/:id', deleteHospital);
router.post('/', postHospital);
router.put('/:id', putHospital)

export default router;