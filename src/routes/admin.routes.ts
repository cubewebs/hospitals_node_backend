import { Router, Request, Response, NextFunction } from "express";
import {getAdmin} from "../controllers/admin.controller";

const router = Router();

router.get('/', getAdmin);

export default router;