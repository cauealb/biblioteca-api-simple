import type { FastifyInstance } from "fastify";
import { CreateSessionIdController } from "./controllers/CreateSessionIdController.js";
import { ListSessionIdController } from "./controllers/ListSessionIdController.js";

const listSessionIdController = new ListSessionIdController()
const createSessionIdController = new CreateSessionIdController()

export async function SessionRoutes(app: FastifyInstance) {
    app.get('/session', listSessionIdController.handle)
    
    app.post('/session/:id', createSessionIdController.handle)
}