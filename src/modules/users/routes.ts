import type { FastifyInstance } from "fastify";
import CreateUserController from "./controllers/createUserController.js";
import { DeleteUserController } from "./controllers/DeleteUserController.js";

const createUserController = new CreateUserController()
const deleteUserController = new DeleteUserController()

export async function UserRoutes(app: FastifyInstance) {
    app.post('/users', createUserController.handle)
    app.delete('/users/:id', deleteUserController.handle)
}