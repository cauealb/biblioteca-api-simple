import prisma from "../../lib/prisma.js";

export async function findRoleByName(name: string) {
    const role = await prisma.role.findFirst({
        where: { nameRole: name }
    })

    return role
}