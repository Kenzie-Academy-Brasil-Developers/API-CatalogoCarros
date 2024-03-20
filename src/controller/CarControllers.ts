import { Request, Response } from "express";
import { CarServices } from "../services/CarService";
import { injectable } from "tsyringe";

@injectable()
export class CarControllers {
    carServices: any;
    contructor(@inject ("CarServices") private carServices: CarServices) {}
    
    async create(req: Request, res: Response): Promise<Response> {
        const newCar = await this.carServices.create(req.body);

        return res.status(201).json(newCar);
    }

    async findMany(req: Request, res: Response): Promise<Response> {
        const cars = await this.carServices.findMany();

        return res.status(200).json(cars);
    }

    async findOne(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const cars = await this.carServices.findOne(id);

        return res.status(200).json(car);
    }

    async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const data = req.body;

        const cars = await this.carServices.update(id, data);

        return res.status(200).json(cars);
    }    

    async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        await this.carServices.delete(id);

        return res.status(204).json();
    } 
}