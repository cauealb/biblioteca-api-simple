import { FastifyInstance } from 'fastify';

export async function Libary(app: FastifyInstance) {

    app.get('/', (request, replay) => {
        const body = request.body

        replay.status(200).send(body)
    })
}