import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    createUser(username: string, email: string, password: string): Promise<User>;
    findAll(): Promise<User[]>;
}
