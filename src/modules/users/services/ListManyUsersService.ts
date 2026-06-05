import type { UserRepository } from "../../../repository/contract/userRepository.js";

export class ListManyUsersService {
    constructor(
        private repository: UserRepository
    ) {}

    async handle() {
        return await this.repository.findAll()
    }
}