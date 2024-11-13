import { Application, Request, Response } from "express";
import router from "./router/router";
export const mainApp = (app: Application) => {
  try {
    app.use("/api", router);

    app.get("/", (req: Request, res: Response) => {
      try {
        res.status(200).json({
          message: "Awesome API",
        });
      } catch (error) {
        res.status(404).json({
          message: "Error",
        });
      }
    });
  } catch (error) {
    return error;
  }
};
