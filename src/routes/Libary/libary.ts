import { FastifyInstance } from 'fastify';
import { uuidv4, z } from 'zod';
import { v4 } from 'uuid';
import { estaValidado } from '../../app';
interface Books {
    id: string
    title: string
    author: string
    publishedYear: Date
    read: boolean
}

let books: Books[] = []

export async function Libary(app: FastifyInstance) {
    app.addHook("preValidation", (_, replay) => {
        if (!estaValidado) {
            replay.status(401).send("Inautorizado")
        }
    })

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

    app.get('/:id', (request, replay) => {
        
        try {
            const idShema = z.object({ id: uuidv4() });
            const { id } = idShema.parse(request.params);
            
            const myBook = books.find((book) => book.id === id);
            replay.status(200).send(myBook);
        } catch {
            replay.status(401).send("Impossível visualizar este livro. Tente novamente mais tarde!")
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

    app.put('/:id', (request, replay) => {
        try {
            const idShema = z.object({ id: uuidv4() });
            const { id } = idShema.parse(request.params);

            const bodyShema = z.object({ title: z.string().min(2), author: z.string(), publishedYear: z.date().default(new Date), read: z.boolean().default(false) });
            const body = bodyShema.parse(request.body);

            // TODO: Terminar essa rota
        } catch {
            replay.status(401).send("Impossível atualizar este livro. Tente novamente mais tarde!")
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
            replay.status(401).send("Impossível checar este livro lido. Tente novamente mais tarde!")
        }
    })
}