import type { bookRepository } from "../../../repository/contract/bookRepository.js";

export class ListBookByIdService {
    constructor(
        private repository: bookRepository
    ) {}

    async execute(id: number) {
        return await this.repository.findById(id);
    }
}