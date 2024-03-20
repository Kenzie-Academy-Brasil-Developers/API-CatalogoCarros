import { number, string } from "zod";
import { baseSchema } from "./baseSchema";

export const carSchema = baseSchema.extend({
    name: string().min(1),
    description: string().min(3),
    brand: number().min(1),
    year: number().positive(),
    km: number().positive(),
})

export const carCreateSchema = carSchema.omit({
    id: true,
});

export const carUpdateSchema = carCreateSchema.partial();

export const carReturnSchema = carSchema;

