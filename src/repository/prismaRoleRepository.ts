import type { Role } from "@prisma/client";
import prisma from "../lib/prisma.js";
import type { roleRepository } from "./contract/roleRepository.js";

export class prismaRoleRepository implements roleRepository {
    async create(nameRole: string) {
        return await prisma.role.create({
            data: { nameRole: nameRole }
        })
    }

    async delete(id: number) {
        await prisma.role.delete({ where: { idRole: id }})

        return true
    }

    async findAll(): Promise<Role[] | null> {
        return await prisma.role.findMany()
    }

    async findById(id: number) {
        return await prisma.role.findFirst({ where: { idRole: id } })
    }

    async findByName(name: string) {
        return await prisma.role.findFirst({ where: { nameRole: name } })
    }
}