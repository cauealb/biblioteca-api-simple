import fastify from "fastify";
import { Libary } from "./routes/Libary/libary.js";
import { PrismaClient } from "@prisma/client/extension";
const app = fastify();

export let estaValidado: boolean = false;

app.register(Libary, {
    prefix: 'libary'
});

export default app;