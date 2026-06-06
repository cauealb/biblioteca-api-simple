import type { Book } from "@prisma/client"

export interface bookRepository {
    create(title: string, author: string, publishedDate: Date): Promise<Book>
    update(id: number, title: string, author: string): Promise<void>
    delete(id: number): Promise<void>

    findAll(): Promise<Book[] | null>
    findById(id: number): Promise<Book | null>
}