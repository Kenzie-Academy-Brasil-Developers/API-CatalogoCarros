import { Request, Response, Router } from "express";
import { container } from "tsyringe";
import { CarServices } from "../services/CarService";
import { CarControllers } from "../controller";
import { carCreateSchema, carUpdateSchema } from "../schemas";
import { ensureMiddleware } from "../middlewares";

export const carRouter = Router();

container.registerSingleton("CarService", CarServices);
export const carControllers = container.resolve(CarControllers);

export const createCar = (req: Request, res: Response) => 
    carControllers.create(req,res);

export const findManyCars = (req: Request, res: Response) => 
    carControllers.findMany(req, res);

export const findOneCar = (req: Request, res: Response) => 
    carControllers.findOne(req, res);

export const updateCar = (req: Request, res: Response) => 
    carControllers.update(req, res);

export const deleteCar = (req: Request, res: Response) => 
    carControllers.delete(req, res);


carRouter.post("/", ensureMiddleware.validateBody(carCreateSchema), createCar);
carRouter.get("/", findManyCars);

carRouter.use("/:id", ensureMiddleware.carIdExists);

carRouter.get("/:id", findOneCar);
carRouter.patch("/:id", ensureMiddleware.validateBody(carUpdateSchema), updateCar);

carRouter.delete("/:id", deleteCar);

