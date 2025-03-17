import { api } from "./server";
import { Request, Response } from "express";


export const server = (req: Request, res: Response) => {
    return api(req, res);
};