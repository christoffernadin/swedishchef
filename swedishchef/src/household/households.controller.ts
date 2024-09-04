import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  // Delete,
} from '@nestjs/common';
import { HouseholdsService } from './households.service';
import { CreateHouseholdDto } from './dto/create-household.dto';
import { UsersService } from '../users/users.service';
import { AddExistingUserDto } from '../users/dto/add-existing-user.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
// import { UpdateHouseholdDto } from './dto/update-household.dto';

@Controller('households')
export class HouseholdsController {
  constructor(
    private readonly householdService: HouseholdsService,
    private readonly userService: UsersService,
  ) {}

  @Post()
  create(@Body() createHouseholdDto: CreateHouseholdDto) {
    return this.householdService.create(createHouseholdDto);
  }

  @Get()
  findAll() {
    return this.householdService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.householdService.findOne(+id);
  }

  @Get(':id/users')
  findUsers(@Param('id') id: number) {
    return this.householdService.getUsers(id);
  }

  @Post(':id/users')
  addUserToHousehold(
    @Param('id') householdId: number,
    @Body() createUserDto: CreateUserDto | AddExistingUserDto,
  ) {
    if ('userId' in createUserDto) {
      return this.userService.addExistingUserToHousehold(
        householdId,
        createUserDto as AddExistingUserDto,
      );
    } else {
      return this.userService.addNewUserToHousehold(
        householdId,
        createUserDto as CreateUserDto,
      );
    }
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateHouseholdDto: UpdateHouseholdDto,
  // ) {
  //   return this.householdService.update(+id, updateHouseholdDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.householdService.remove(+id);
  // }
}
