import { Request, Response, NextFunction } from "express";

export const getAdmin = (req: Request, res: Response, next: NextFunction) => {
    res.json('Admin controller');
}