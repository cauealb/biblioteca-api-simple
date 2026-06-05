import type { FastifyInstance } from "fastify";
import { CreateSessionIdController } from "./controllers/CreateSessionIdController.js";

const createSessionIdController = new CreateSessionIdController()

export async function SessionRoutes(app: FastifyInstance) {
    app.post('/session/:id', createSessionIdController.handle)
}