import type { FastifyInstance } from "fastify";
import { ValidateSessionId } from "../../middlewares/validateSessionId.js";
import { CreateBookController } from "./controllers/CreateBookController.js";
import { ListBooksController } from "./controllers/ListBooksController.js";

const createBookController = new CreateBookController()
const listBookController = new ListBooksController()

export async function BookRoutes(app: FastifyInstance) {
    app.get('/books', {preHandler: [ValidateSessionId]}, listBookController.handle)

    app.post('/books', { preHandler: [ValidateSessionId] }, createBookController.handle)
}