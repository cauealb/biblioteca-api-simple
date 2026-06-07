import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { PrismaBookRepository } from "../../../repository/PrismaBookRepository.js";
import { CreateBookService } from "../services/CreateBookService.js";

const repository = new PrismaBookRepository()
const service = new CreateBookService(repository)

export class CreateBookController {
    async handle(request: FastifyRequest, replay: FastifyReply) {
        const bodySchema = z.object({ 
            name: z.string(), 
            author: z.string(),
            publishedDate: z.coerce.date()
        });
        const { name, author, publishedDate } = bodySchema.parse(request.body);

        const book = await service.execute(name, author, publishedDate)
        replay.status(201).send(book)
    }
}