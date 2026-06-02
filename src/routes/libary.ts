import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { v4 } from 'uuid';
interface Books {
    id: string
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
            const bodyShema = z.object({title: z.string().min(2), author: z.string(), publishedYear: z.date().default(new Date), read: z.boolean().default(false)})
            const body = bodyShema.parse(request.body);

            books.push({id: v4(), ...body});
            replay.status(201).send();
        } catch {
            replay.status(401).send("Impossível incluir este livro. Tente novamente mais tarde!")
        }
    })

    app.delete('/:id', (request, replay) => {
        try {
            const idShema = z.object({id: z.uuidv4()});
            const { id } = idShema.parse(request.params);

            const newLibary = books.filter((book) => (book.id != id));
            books = newLibary

            replay.status(200).send(books)
        } catch {
            replay.status(401).send("Impossível deletar este livro. Tente novamente mais tarde!")
        }
    })
}