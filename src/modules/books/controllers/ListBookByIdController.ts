import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { PrismaBookRepository } from "../../../repository/PrismaBookRepository.js";
import { ListBookByIdService } from "../services/ListBookByIdService.js";

const repository = new PrismaBookRepository()
const service = new ListBookByIdService(repository)

export class ListBookByIdController {
    async handle(request: FastifyRequest, replay: FastifyReply) {
        const idSchema = z.object({ id: z.coerce.number() })
        const { id } = idSchema.parse(request.params)

        const book = await service.execute(id)
        replay.status(200).send(book)
    }
}