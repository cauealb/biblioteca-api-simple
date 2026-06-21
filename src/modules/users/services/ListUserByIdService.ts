import type { UserRepository } from "../../../repository/contract/userRepository.js";

export class ListUserByIdService {
    constructor (
        private repository: UserRepository
    ) {}

    async execute(id: number) {
        return await this.repository.findById(id)
    }
}