import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
	name: string;
	email: string;
}

class CreateUserUseCase {
	constructor(private UsersRepository: IUsersRepository) {}

	execute({ name, email }: IRequest): void {
		const userAlreadyExists = this.UsersRepository.findByEmail(email);
		if (userAlreadyExists) {
			throw new Error('User already exists!');
		}
		this.UsersRepository.create({ name, email });
	}
}

export { CreateUserUseCase };
