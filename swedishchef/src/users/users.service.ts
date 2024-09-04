import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AddExistingUserDto } from './dto/add-existing-user.dto';
import { Household } from 'src/household/entities/households.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,

    @InjectRepository(Household)
    private householdRepository: Repository<Household>,
  ) {}

  async createUser(
    username: string,
    email: string,
    password: string,
  ): Promise<User> {
    const newUser = this.usersRepository.create({ username, email, password });
    return this.usersRepository.save(newUser);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async addExistingUserToHousehold(
    householdId: number,
    addExistingUserDto: AddExistingUserDto,
  ): Promise<User> {
    const household = await this.householdRepository.findOne({
      where: { id: householdId },
    });
    if (!household) {
      throw new Error('Household not found');
    }
    const user = await this.usersRepository.findOne({
      where: { id: addExistingUserDto.userId },
    });
    user.household = household;
    return this.usersRepository.save(user);
  }

  async addNewUserToHousehold(
    householdId: number,
    createUserDto: CreateUserDto,
  ): Promise<User> {
    const household = await this.householdRepository.findOne({
      where: { id: householdId },
    });
    if (!household) {
      throw new Error('Household not found');
    }

    const user = await this.usersRepository.create({
      ...createUserDto,
      household: household,
    });

    return await this.usersRepository.save(user);
  }
}
