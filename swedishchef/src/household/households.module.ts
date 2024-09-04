import { Module } from '@nestjs/common';
import { HouseholdsService } from './households.service';
import { HouseholdsController } from './households.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Household } from './entities/households.entity';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([Household, User])],
  controllers: [HouseholdsController],
  providers: [HouseholdsService, UsersService],
})
export class HouseholdModule {}
