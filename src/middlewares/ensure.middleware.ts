import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import { prisma } from "../database/prisma";
import { container } from "tsyringe";
import { AppError } from "../errors/AppError";

class EnsureMiddleware {
    validateBody = (schema: AnyZodObject) =>
        (req: Request, res: Response, next: NextFunction): void => {
            req.body = schema.parse(req.body);

            return next();
        }

    carIdExists = async ({ params }:
        Request, res: Response, next: NextFunction
    ): Promise<void> => {
        const id = params.id;

        const foundCar = await prisma.car.findFirst({
            where: { id },
        });

        if (!id) {
            return next();
        }

        const car = await prisma.car.findUnique({
            where: { id },
        });

        if (!car) {
            throw new AppError(404, "Car not found.");
        }
        res.locals = { ...res.locals, foundCar };

        return next();
    };
}

export const ensureMiddleware = container.resolve(EnsureMiddleware);