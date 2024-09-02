import { Recipe } from './recipe.entity';
export declare class RecipeToIngredient {
    id: number;
    recipeId: number;
    ingredientId: number;
    quantity: number;
    unit: string;
    recipe: Recipe;
}
