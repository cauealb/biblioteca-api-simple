import type { Book } from "@prisma/client";
import type { bookRepository } from "./contract/bookRepository.js";
import prisma from "../lib/prisma.js";

export class PrismaBookRepository implements bookRepository {
    async create(title: string, author: string, publishedDate: Date): Promise<Book> {
        return await prisma.book.create({
            data: {title, author, publishedDate
            }
        })
    }

    async delete(id: number): Promise<void> {
        await prisma.book.delete({ where: { idBook: id } })
    }

    async findAll(): Promise<Book[] | null> {
        return prisma.book.findMany()
    }

    async findById(id: number) {
        return await prisma.book.findFirst({ where: { idBook: id } })
    }

    async update(id: number, title: string, author: string): Promise<void> {
        await prisma.book.update({
            where: { idBook: id },
            data: { title, author }
        })
    }
}