import { Recipe } from './recipe.entity';
import { User } from '../users/entities/user.entity';
export declare class RecipeRating {
    id: number;
    recipe_id: Recipe;
    user_id: User;
    rating: number;
    created_at: Date;
}
