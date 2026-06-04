import { PrismaClient } from '@prisma/client'
import type { FastifyInstance } from 'fastify';
import { z } from 'zod';

const prisma = new PrismaClient()

export async function BookRoutes(app: FastifyInstance) {
     app.get('/',  async (_, replay) => {
        const book = await prisma.book.findMany()
        return replay.status(200).send(book);
    })

    app.post('/', async (request, replay) => {
        try {
            const bodyShema = z.object({title: z.string().min(2), author: z.string(), publishedDate: z.coerce.date() })
            const body = bodyShema.parse(request.body);

            await prisma.book.create({
                data: {
                    title: body.title,
                    author: body.author,
                    publishedDate: body.publishedDate
                }
            })

            return replay.status(201).send();
        } catch {
            return replay.status(400).send("Impossível incluir este livro. Tente novamente mais tarde!")
        }
    })

    app.get('/:id', async (request, replay) => {
        
        try {
            const idShema = z.object({ id: z.coerce.number() });
            const { id } = idShema.parse(request.params);
            
            const book = await prisma.book.findFirst({
                where: {
                    idBook: id
                }
            })
            
            return replay.status(200).send(book);
        } catch {
            return replay.status(400).send("Impossível visualizar este livro. Tente novamente mais tarde!")
        }
    })

    app.delete('/:id', async (request, replay) => {
        try {
            const idShema = z.object({id: z.coerce.number() });
            const { id } = idShema.parse(request.params);

            await prisma.book.delete({ where: { idBook: id } })
            return replay.status(204).send()
        } catch {
            return replay.status(400).send("Impossível deletar este livro. Tente novamente mais tarde!")
        }
    })

    app.put('/:id', async (request, replay) => {
        try {
            const idShema = z.object({ id: z.coerce.number() });
            const { id } = idShema.parse(request.params);

            const bodyShema = z.object({ title: z.string().min(2), author: z.string(), publishedDate: z.coerce.date() })
            const body = bodyShema.parse(request.body)

            await prisma.book.update({
                where: {
                    idBook: id
                },
                data: {
                    title: body.title,
                    author: body.author,
                    publishedDate: body.publishedDate
                }
            })

            return replay.status(200).send()
        } catch (ex) {
            console.log(ex)
            return replay.status(400).send("Impossível atualizar este livro. Tente novamente mais tarde!")
        }
    })
}