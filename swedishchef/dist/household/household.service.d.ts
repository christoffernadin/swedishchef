import { CreateHouseholdDto } from './dto/create-household.dto';
import { UpdateHouseholdDto } from './dto/update-household.dto';
export declare class HouseholdService {
    create(createHouseholdDto: CreateHouseholdDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateHouseholdDto: UpdateHouseholdDto): string;
    remove(id: number): string;
}
