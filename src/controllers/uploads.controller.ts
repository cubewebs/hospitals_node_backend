// ruta: /uploads/:type/:id

import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from 'uuid';
import {updateImage} from "../helpers/update-image";
import path from "node:path";

export const uploadFiles = async (req: Request, res: Response, next: NextFunction) => {

    const {type, id} = req.params;
    const validTypes = ['hospitals', 'users', 'doctors'];
    if (!validTypes.includes(type)) {
        return res.status(400).json({
            ok: false,
            msg: 'Invalid type'
        })
    }

    // We validate that there are files in the request
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            ok: false,
            msg: 'No files were selected to be uploaded'
        })
    }

    // Proccess the files
    const file = req.files.image as any;
    const splitName = file.name.split('.');
    const extension = splitName[splitName.length - 1];
    //Validate extension
    const validExtensions = ['png', 'jpg', 'jpeg', 'gif'];

    if (!validExtensions.includes(extension)) {
        return res.status(400).json({
            ok: false,
            msg: 'Invalid extension'
        })
    }

    // Generate the name of the file
    const fileName = `${uuidv4()}.${extension}`;
    // Upload the file
    const path = `src/uploads/${type}/${fileName}`;
    file.mv(path, (err: any) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                ok: false,
                msg: 'Error uploading file'
            })
        }

        // Update database
        updateImage(type, id, fileName);

        // Save the path in the database
        res.json({
            ok: true,
            msg: 'File uploaded',
            fileName
        })

    });
}

export const getImage = async (req: Request, res: Response, next: NextFunction) => {
    const {type, img} = req.params;
    const pathImg = path.join(__dirname, '..', '..', `src/uploads/${type}/${img}`);
    res.sendFile(pathImg);
}

