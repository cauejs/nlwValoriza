import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/repositories';

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    const UsersRepository = getCustomRepository(UsersRepositories);

    if (!email) {
      throw new Error('Email incorrect');
    }

    const userAlreadyExists = await UsersRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const user = UsersRepository.create({
      name,
      email,
      admin,
    });

    await UsersRepository.save(user);

    return user;
  }
}

export { CreateUserService };
