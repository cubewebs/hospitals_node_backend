import { Request, Response, NextFunction } from "express";
import Hospital from "../models/mysql/hospitals.model";

export const getHospitals = async (req: Request, res: Response, next: NextFunction) => {
    const listHospitals = await Hospital.findAll()
    res.json(listHospitals);
}

export const getHospital = async (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    const hospital = await Hospital.findByPk(id)
    if (hospital) res.json(hospital); else res.status(404).json({msg: `No hospital with id: ${id}`})
}

export const deleteHospital = async (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    const hospital = await Hospital.findByPk(id)
    if (!hospital) {
        res.status(404).json({msg: `No hospital with id: ${id}`})
    } else {
        await hospital.destroy();
        res.json({msg: `The hospital with id ${id} has been deleted from the database`})
    }
}

export const postHospital = async (req: Request, res: Response, next: NextFunction) => {
    const {body} = req;
    try {
        const hospital = await Hospital.create(body);
        res.status(200).json(hospital)
    } catch (error) {
        res.status(404).json({msg: `There has been an error trying to create the hospital`, error})
    }
}

export const putHospital = async (req: Request, res: Response, next: NextFunction) => {
    const {body} = req;
    const {id} = req.params;
    const hospital = await Hospital.findByPk(id);

    try {
        if (!hospital) {
            res.status(404).json({msg: `There is no hospital with the id ${id}`})
        } else {
            await hospital.update(body);
            res.status(200).json({msg: `The hospital with id ${id} has been updated successfully`})
        }
    } catch (error) {
        console.log(error);
        res.status(404).json({msg: `Something went wrong, contact your administrator`})
    }
}