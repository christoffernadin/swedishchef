import { Household } from '../household/entities/household.entity';
import { Ingredient } from './ingredient.entity';
export declare class Pantry {
    id: number;
    household_id: Household;
    ingredient_id: Ingredient;
    quantity: number;
    unit: string;
}
