import { Module } from '@nestjs/common';
import { HouseholdService } from './household.service';
import { HouseholdController } from './household.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Household } from './entities/household.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Household])],
  controllers: [HouseholdController],
  providers: [HouseholdService],
})
export class HouseholdModule {}
