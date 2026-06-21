import type { UserRepository } from "../../../repository/contract/userRepository.js";

export class ListManyUsersService {
    constructor(
        private repository: UserRepository
    ) {}

    async execute() {
        return await this.repository.findAll()
    }
}