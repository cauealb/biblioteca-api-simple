import type { FastifyInstance } from "fastify";
import { PrismaClient } from "@prisma/client";
import z, { email } from "zod";

const prisma = new PrismaClient()

export async function UserRoutes(app: FastifyInstance) {
    app.post('', async (request, replay) => {
        try {
            const requestSchema = z.object({
                name: z.string(),
                email: z.email(),
                password: z.coerce.string()
            })

            const { name, email, password } = requestSchema.parse(request.body);

            const user = await prisma.user.findFirst({
                where: {
                    email: email
                }
            })

            if (user) {
                throw new Error();
            }

            await prisma.user.create({
                data: {
                    name: name,
                    email: email,
                    password: password
                }
            })

        } catch {
            replay.status(400).send("Erro ao criar usuário!")
        }
    })
}