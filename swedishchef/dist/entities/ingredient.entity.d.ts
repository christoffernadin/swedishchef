import { RecipeToIngredient } from './recipetoingredient.entity';
export declare class Ingredient {
    id: number;
    name: string;
    category: string;
    recipeToIngredients: RecipeToIngredient[];
}
