import type { FastifyInstance } from "fastify";
import { PrismaClient } from "@prisma/client";
import z, { email } from "zod";

const prisma = new PrismaClient();

export async function UserRoutes(app: FastifyInstance) {
  app.get("/", async (_, replay) => {
    try {
      const user = await prisma.user.findMany();
      replay.status(404).send(user);
    } catch {
      replay.status(400).send("Erro ao visualizar usuários!");
    }
  });

  app.get("/:id", async (request, replay) => {
    try {
      const idSchema = z.object({ id: z.number() });
      const { id } = idSchema.parse(request.params);

      const user = await prisma.user.findFirst({
        where: { idUser: id },
      });

      if (user) {
        replay.status(200).send(user);
        return;
      }

      replay.status(404).send();
    } catch {
      replay.status(400).send("Erro ao visualizar usuário!");
    }
  });

  app.post("", async (request, replay) => {
    try {
      const requestSchema = z.object({
        name: z.string(),
        email: z.email(),
        password: z.coerce.string(),
      });

      const { name, email, password } = requestSchema.parse(request.body);

      const user = await prisma.user.findFirst({
        where: {
          email: email,
        },
      });

      if (user) {
        throw new Error();
      }

      await prisma.user.create({
        data: {
          name: name,
          email: email,
          password: password,
        },
      });
    } catch {
      replay.status(400).send("Erro ao criar usuário!");
    }
  });
}
