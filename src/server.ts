import "reflect-metadata";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { useContainer } from "routing-controllers";
import { Container } from "typedi";
import { setupRoutes } from "./routes";
import "./config/firebase";

dotenv.config();

useContainer(Container);

const app = express();

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

app.use(express.json());

setupRoutes(app);

// 🔥 En lugar de `app.listen()`, exportamos la función para Cloud Functions
export const api = app;