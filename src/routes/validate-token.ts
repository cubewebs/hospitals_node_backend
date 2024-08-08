import {Request, Response, NextFunction} from "express";
import jwt from 'jsonwebtoken';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    const headerToken = req.headers['authorization'];
    console.log(headerToken);
    if (headerToken != undefined && headerToken.startsWith('Bearer ')) {
        try {
            const bearerToken = headerToken.slice(7);
            jwt.verify(bearerToken, process.env.SECRET_KEY || 'HfYs(b5hR@Rg4');
            next();
        } catch (error) {
            res.status(401).json({msg: `Token not valid`})
        }

    } else {
        res.status(401).json({
            msg: `Access denied`
        })
    }
}

export default validateToken;