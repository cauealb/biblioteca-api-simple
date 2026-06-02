import { FastifyInstance } from 'fastify';
import { z } from 'zod';

interface Books {
    id: number
    title: string
    author: string
    publishedYear: Date
    read: boolean
}

let books: Books[] = []

export async function Libary(app: FastifyInstance) {
    app.get('/', (_, replay) => {
        replay.status(200).send(books);
    })

    app.post('/', (request, replay) => {
        try {
            const bodyShema = z.object({id: z.number, title: z.string().min(2), author: z.string(), publishedYear: z.date, read: z.boolean().default(false)})
            const body = bodyShema.parse(request.body);

            books.push(body);
        } catch {
            replay.status(401).send("Impossível incluir este livro. Tente novamente mais tarde!")
        }
    })
}