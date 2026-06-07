import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { PrismaBookRepository } from "../../../repository/PrismaBookRepository.js";
import { UpdateBookService } from "../services/UpdateBookService.js";

const repository = new PrismaBookRepository()
const service = new UpdateBookService(repository)

export class UpdateBookController {
    async handle(request: FastifyRequest, replay: FastifyReply) {
        const idSchema = z.object({ id: z.coerce.number() })
        const { id } = idSchema.parse(request.params)

        const bodySchema = z.object({ title: z.string(), author: z.string() })
        const { title, author } = bodySchema.parse(request.body)

        await service.execute(id, title, author);
        replay.status(200).send()
    }
}