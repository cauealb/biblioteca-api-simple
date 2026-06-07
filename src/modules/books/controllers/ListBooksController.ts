import type { FastifyReply, FastifyRequest } from "fastify";
import { PrismaBookRepository } from "../../../repository/PrismaBookRepository.js";
import { ListBooksService } from "../services/ListBooksService.js";

const repository = new PrismaBookRepository()
const service = new ListBooksService(repository)

export class ListBooksController {
    async handle(_: FastifyRequest, replay: FastifyReply) {
        const books = await service.execute();
        replay.status(200).send(books)
    }
}