import { PrismaClient } from '@prisma/client'
import type { FastifyInstance } from 'fastify';
import { number, uuidv4, z } from 'zod';
import { v4 } from 'uuid';
interface Books {
    id: string
    title: string
    author: string
    publishedYear: Date
    read: boolean
}

let books: Books[] = []

const prisma = new PrismaClient()

export async function Book(app: FastifyInstance) {
     app.get('/',  async (_, replay) => {
        const book = await prisma.book.findMany()
        replay.status(200).send(book);
    })

    app.post('/', async (request, replay) => {
        try {
            const bodyShema = z.object({title: z.string().min(2), author: z.string(), publishedYear: z.date().default(new Date), read: z.boolean().default(false)})
            const body = bodyShema.parse(request.body);

            await prisma.book.create({
                data: {
                    title: body.title,
                    author: body.author,
                    publishedDate: body.publishedYear
                }
            })

            replay.status(201).send();
        } catch {
            replay.status(400).send("Impossível incluir este livro. Tente novamente mais tarde!")
        }
    })

    app.get('/:id', async (request, replay) => {
        
        try {
            const idShema = z.object({ id: z.number() });
            console.log(request.params)
            const { id } = idShema.parse(request.params);
            
            const book = await prisma.book.findFirst({
                where: {
                    idBook: id
                }
            })
            
            replay.status(200).send(book);
        } catch {
            replay.status(400).send("Impossível visualizar este livro. Tente novamente mais tarde!")
        }
    })

    app.delete('/:id', async (request, replay) => {
        try {
            const idShema = z.object({id: z.coerce.number() });
            const { id } = idShema.parse(request.params);

            await prisma.book.delete({ where: { idBook: id } })
            replay.status(204).send()
        } catch {
            replay.status(400).send("Impossível deletar este livro. Tente novamente mais tarde!")
        }
    })

    app.put('/:id', (request, replay) => {
        try {
            const idShema = z.object({ id: uuidv4() });
            const { id } = idShema.parse(request.params);

            const bodyShema = z.object({ title: z.string().min(2), author: z.string(), publishedYear: z.date().default(new Date), read: z.boolean().default(false) });
            const body = bodyShema.parse(request.body);

            // TODO: Terminar essa rota
        } catch {
            replay.status(400).send("Impossível atualizar este livro. Tente novamente mais tarde!")
        }
    })

    app.patch('/checkBook/:id', (request, replay) => {
        try {
            const idShema = z.object({ id: uuidv4() });
            const { id } = idShema.parse(request.params);

            books.forEach(item => {
                if (item.id === id) {
                    item.read = true
                }
            })

            replay.status(200).send()
        } catch {
            replay.status(400).send("Impossível checar este livro lido. Tente novamente mais tarde!")
        }
    })
}