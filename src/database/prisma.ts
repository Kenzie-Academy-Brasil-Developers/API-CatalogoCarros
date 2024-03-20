import { PrismaClient } from "@prisma/client";

export const env = process.env.NOD_ENV;

export const prisma = new PrismaClient({
    log: env === "test" ? [] : ["query"],
});
