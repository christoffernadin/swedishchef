import { Recipe } from './recipe.entity';
import { Household } from '../household/entities/household.entity';
export declare class RecipeUsageLog {
    id: number;
    recipe_id: Recipe;
    household_id: Household;
    cooked_at: Date;
}
