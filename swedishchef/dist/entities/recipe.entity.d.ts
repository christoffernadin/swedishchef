import { User } from '../users/entities/user.entity';
import { RecipeToIngredient } from './recipetoingredient.entity';
export declare class Recipe {
    id: number;
    name: string;
    description: string;
    instructions: string;
    created_by: User;
    created_at: Date;
    is_public: boolean;
    recipeToIngredients: RecipeToIngredient[];
}
