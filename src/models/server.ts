import express, { Application } from 'express';
import cors from 'cors';
import hospitalsRoutes from "../routes/hospitals.routes";
import adminRoutes from "../routes/admin.routes";
import db from "../db/connection";
import usersRoutes from "../routes/users.routes";
import Hospital from "./mysql/hospitals.model";
import User from "./mysql/users.model";
import validateToken from "../routes/validate-token";
import uploadsRoutes from "../routes/uploads.routes";

export default class Server {
    private app: Application;
    private readonly PORT: string;
    constructor() {
        this.app = express();
        this.middlewares();
        this.PORT = process.env.PORT ?? '3001';
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.PORT, () => {
            console.log(`Server running on port ${this.PORT} endpoint: http://localhost:${this.PORT}`);
        })
    }

    routes() {
        this.app.use('/users', usersRoutes);
        this.app.use('/hospitals', validateToken, hospitalsRoutes);
        this.app.use('/admin', validateToken, adminRoutes);
        this.app.use('/uploads', uploadsRoutes);
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            await Hospital.sync();
            await User.sync();
            console.log('Database connected successfully');
        } catch (error) {
            console.log('Error connecting to database --> ', error)
        }
    }
}