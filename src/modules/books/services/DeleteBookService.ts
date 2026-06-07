import type { bookRepository } from "../../../repository/contract/bookRepository.js";

export class DeleteBookService {
    constructor(
        private repository: bookRepository
    ) {}

    async execute(id: number) {
        const book = await this.repository.findById(id)
        if(!book) {
            throw new Error("Este livro não existe!")
        }

        await this.repository.delete(id)
    }
}