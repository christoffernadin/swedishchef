import { HouseholdService } from './household.service';
import { CreateHouseholdDto } from './dto/create-household.dto';
import { UpdateHouseholdDto } from './dto/update-household.dto';
export declare class HouseholdController {
    private readonly householdService;
    constructor(householdService: HouseholdService);
    create(createHouseholdDto: CreateHouseholdDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateHouseholdDto: UpdateHouseholdDto): string;
    remove(id: string): string;
}
