import User from "../models/mysql/users.model";
import Hospital from "../models/mysql/hospitals.model";
import * as fs from "node:fs";

export const updateImage = async (type: string, id: string, fileName: string) => {
    if (type === 'users') {
        let userAvatar;
        const user: any = await User.findByPk(id);
        if (!user) {
            return {msg: `There is no user with the id ${id}`}
        }
        userAvatar = user.avatar;
        if (fs.existsSync(userAvatar)) {
            fs.unlinkSync(userAvatar);
        }
        User.update({avatar: fileName}, {
            where: {
                id
            }
        });
    } else if (type === 'hospitals') {
        let hospitalImage;
        const hospital: any = await Hospital.findByPk(id);
        if (!hospital) {
            return {msg: `There is no user with the id ${id}`}
        }
        hospitalImage = hospital.dataValues.image;
        if (fs.existsSync(hospitalImage)) {
            fs.unlinkSync(hospitalImage);
        }
        Hospital.update({image: fileName}, {
            where: {
                id
            }
        });
    }

}