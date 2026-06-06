import type { FastifyInstance } from "fastify";
import { CreateSessionIdController } from "./controllers/CreateSessionIdController.js";
import { ListSessionIdController } from "./controllers/ListSessionIdController.js";
import { ListSessionIdByIdController } from "./controllers/ListSessionIdByIdController.js";

const listSessionIdController = new ListSessionIdController()
const createSessionIdController = new CreateSessionIdController()
const listSessionIdByIdController = new ListSessionIdByIdController()

export async function SessionRoutes(app: FastifyInstance) {
    app.get('/session', listSessionIdController.handle)
    app.get('/session/:sessionId', listSessionIdByIdController.handle)
    
    app.post('/session/:id', createSessionIdController.handle)
}