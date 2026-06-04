import type { User } from "@prisma/client";
import type { UserRepository } from "./contract/userRepository.js";
import prisma from "../lib/prisma.js";

export class PrismaUserRepository implements UserRepository {
    async create(User: User) {
        return await prisma.user.create({
            data: User
        })
    }

    async delete(idUser: number) {
        await prisma.user.delete({
            where: { idUser: idUser }
        })

        return true;
    }

    async update(id: number, password: string) {
        await prisma.user.update({
            where: { idUser: id },
            data: { password: password }
        })

        return true;
    }

    async findAll() {
        return await prisma.user.findMany()
    }

    async findById(id: number) {
        return await prisma.user.findFirst({ where: { idUser: id } })
    }

    async findByEmail(email: string): Promise<User | null> {
        return await prisma.user.findFirst({ where: { email: email } })
    }
}