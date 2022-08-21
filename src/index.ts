import express, { json, Request, Response } from "express";

const app = express();

app.use(json());

app.use("/test", async (req: Request, res: Response) => {});

app.listen(5000, () => {
  console.log("Server running on port: ", 5000);
});