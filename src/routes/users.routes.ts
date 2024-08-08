import express from "express";
import {deleteUser, getUser, loginUser, registerUser, updateUser} from "../controllers/users.controller";
import {uploadFiles} from "../controllers/uploads.controller";

const router = express.Router();

// add the routes like this: router.get('/', getHospitals); and don't forget to import them also
router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/:id', getUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser)

export default router;