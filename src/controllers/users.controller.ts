import { Request, Response, NextFunction } from "express";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/mysql/users.model';

export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
    const {username, email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        let userExist = await User.findOne({ where: { username }}) || await User.findOne({ where: { email }})
        if (userExist?.dataValues.username === username) {
            return res.status(400).json({msg: `A user with username ${username} already exist, please insert a different username`});
        } else if (userExist?.dataValues.email === email) {
            return res.status(400).json({msg: `A user with email ${email} already exist, please insert a different email`});
        } else {
            const user = await User.create({username, email, password: hashedPassword});
            res.status(200).json({msg: `The user ${username} has been created successfully`, user});
        }
    } catch (error) {
        res.status(404).json({msg: `There has been an error trying to create the user`, error})
    }
}

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    const {username, password} = req.body;
    const userExist: any = await User.findOne({ where: { username }});
    if (!userExist) {
        return res.status(400).json({msg: `The user with username ${username} doesn't exist`})
    }

    try {
        const passwordValid = await bcrypt.compare(password, userExist.password);
        if (!passwordValid) {
            return res.status(400).json({msg: `The password is invalid`})
        }
        const token = jwt.sign({username}, process.env.SECRET_KEY ?? 'HfYs(b5hR@Rg4');
        res.json({token, userExist})
    } catch (error) {
        res.status(404).json({msg: `There has been an error trying to login the user`, error})
    }
}

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    const user = await User.findByPk(id);
    console.log(user);
    if (user) res.json(user); else res.status(404).json({msg: `No user with id: ${id}`})
}

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    const {body} = req;
    const {id} = req.params;
    const user = await User.findByPk(id);
    try {
        if (!user) {
            res.status(404).json({msg: `There is no user with the id ${id}`})
        } else {
            await user.update(body);
            res.status(200).json({msg: `The user with id ${id} has been updated successfully`})
        }
    } catch (error) {
        console.log(error);
        res.status(404).json({msg: `Something went wrong, contact your administrator`})
    }
}

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    const user = await User.findByPk(id);
    if (!user) {
        res.status(404).json({msg: `There is no user with the id ${id}`})
    } else {
        await user.destroy();
        res.json({msg: `The user with id ${id} has been deleted from the database`})
    }
}
