import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { PrismaSessionRepository } from "../../../repository/PrismaSessionRepository.js";
import { DeleteSessionIdService } from "../services/DeleteSessionIdService.js";

const repository = new PrismaSessionRepository()
const service = new DeleteSessionIdService(repository)

export class DeleteSessionIdController {
    async handle(request: FastifyRequest, replay: FastifyReply) {
        const idSchema = z.object({ id: z.coerce.string() })
        const { id } = idSchema.parse(request.params);

        await service.execute(id);
        replay.status(204).send()
    }
}