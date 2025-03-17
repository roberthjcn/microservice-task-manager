import { useExpressServer } from "routing-controllers";
import express from "express";
import { UserController } from "./modules/users/controllers/userController";
import { TaskController } from "./modules/tasks/controllers/tasksController";

export function setupRoutes(app: express.Express) {
    useExpressServer(app, {
        controllers: [UserController, TaskController],
        defaultErrorHandler: false,
    });
}