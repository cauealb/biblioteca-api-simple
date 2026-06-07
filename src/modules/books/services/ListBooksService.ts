import type { bookRepository } from "../../../repository/contract/bookRepository.js";

export class ListBooksService {
    constructor(
        private repository: bookRepository
    ) {}

    async execute() {
        return this.repository.findAll()
    }
}