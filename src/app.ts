import express, { json } from "express";
import { core } from "./core";
import router from "./router";

export const initSever = () => {

    core();

    const app = express();

    app.use(json());

    app.use("/api", router);

    return app;
};
