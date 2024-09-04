import { Injectable } from '@nestjs/common';
import { CreateHouseholdDto } from './dto/create-household.dto';
// import { UpdateHouseholdDto } from './dto/update-household.dto';
import { Household } from './entities/households.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class HouseholdsService {
  constructor(
    @InjectRepository(Household)
    private householdRepository: Repository<Household>,

    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async create(createHouseholdDto: CreateHouseholdDto): Promise<Household> {
    const newHousehold = this.householdRepository.create(createHouseholdDto);
    return await this.householdRepository.save(newHousehold);
  }

  async findAll() {
    return await this.householdRepository.find();
  }

  async findOne(id: number) {
    return await this.householdRepository.findOne({ where: { id } });
  }

  async getUsers(id: number): Promise<User[]> {
    const household = await this.householdRepository.findOne({ where: { id } });
    return await household.users;
  }

  // update(id: number, updateHouseholdDto: UpdateHouseholdDto) {
  //   return `This action updates a #${id} household`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} household`;
  // }
}
