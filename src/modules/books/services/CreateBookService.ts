import type { bookRepository } from "../../../repository/contract/bookRepository.js";

export class CreateBookService {
    constructor(
        private repository: bookRepository
    ) {}

    async execute(title: string, author: string, publishedDate: Date) {
        if(publishedDate > new Date()) {
            throw new Error("Data de lançamento inválida!")
        }

        return await this.repository.create(title, author, publishedDate)
    }
}