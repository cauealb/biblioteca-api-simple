import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { PrismaBookRepository } from "../../../repository/PrismaBookRepository.js";
import { DeleteBookService } from "../services/DeleteBookService.js";

const repository = new PrismaBookRepository()
const service = new DeleteBookService(repository)

export class DeleteBookController {
    async handle(request: FastifyRequest, replay: FastifyReply) {
        const idSchema = z.object({ id: z.coerce.number() })
        const { id } = idSchema.parse(request.params)

        await service.execute(id)
        replay.status(204).send()
    }
}