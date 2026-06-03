import fastify from "fastify";
import { Book } from "./routes/Libary/book.js";
import { PrismaClient } from "@prisma/client/extension";
const app = fastify();

export let estaValidado: boolean = false;

app.register(Book, {
    prefix: 'book'
});

export default app;