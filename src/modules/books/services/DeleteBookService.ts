import type { bookRepository } from "../../../repository/contract/bookRepository.js";

export class DeleteBookService {
    constructor(
        private repository: bookRepository
    ) {}

    async execute(id: number) {
        // TODO: Validar id

        await this.repository.delete(id)
    }
}