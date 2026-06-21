import type { sessionRepository } from "../../../repository/contract/sessionRepository.js";
import type { UserRepository } from "../../../repository/contract/userRepository.js";

export class DeleteUserService {
  constructor(
    private userRepository: UserRepository,
    private sessionRepository: sessionRepository
  ) {}

  async execute(id: number) {
    const userExists = await this.userRepository.findById(id);
    if (!userExists) throw new Error("Este id não pertence a um usuário!");
    
    await this.sessionRepository.deleteAllSessionOfUser(userExists.idUser!);
    return await this.userRepository.delete(id);
  }
}
