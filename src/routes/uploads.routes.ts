import express from "express";
import {uploadFiles, getImage} from "../controllers/uploads.controller";
import fileUpload from "express-fileupload";

const router = express.Router();

router.use(fileUpload());

router.put('/:type/:id', uploadFiles);
router.get('/:type/:img', getImage);

export default router;