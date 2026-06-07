import type { FastifyInstance } from "fastify";
import { ValidateSessionId } from "../../middlewares/validateSessionId.js";
import { CreateBookController } from "./controllers/CreateBookController.js";
import { ListBooksController } from "./controllers/ListBooksController.js";
import { ListBookByIdController } from "./controllers/ListBookByIdController.js";
import { DeleteBookController } from "./controllers/DeleteBookController.js";
import { UpdateBookController } from "./controllers/UpdateBookController.js";

const createBookController = new CreateBookController()
const listBooksController = new ListBooksController()
const listBookByIdController = new ListBookByIdController()
const deleteBookController = new DeleteBookController()
const updateBookController = new UpdateBookController()

export async function BookRoutes(app: FastifyInstance) {
    app.get('/books', {preHandler: [ValidateSessionId]}, listBooksController.handle)
    app.get('/books/id/:id', {preHandler: [ValidateSessionId]}, listBookByIdController.handle)

    app.post('/books', { preHandler: [ValidateSessionId] }, createBookController.handle)
    app.delete('/books/id/:id', {preHandler: [ValidateSessionId]}, deleteBookController.handle)
    app.patch('/books/id/:id', {preHandler: [ValidateSessionId]}, updateBookController.handle)
}