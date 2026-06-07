import { number } from "zod";
import type { bookRepository } from "../../../repository/contract/bookRepository.js";

export class UpdateBookService {
    constructor(
        private repository: bookRepository
    ) {}

    async execute(id: number, title: string, author: string) {
        const book = await this.repository.findById(id)
        if(!book) {
            throw new Error("Este livro não existe!");
        }

        await this.repository.update(id, title, author);
    }
}