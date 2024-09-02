import { ShoppingList } from './shoppinglist.entity';
import { Ingredient } from './ingredient.entity';
export declare class ShoppingListItem {
    id: number;
    shopping_list_id: ShoppingList;
    ingredient_id: Ingredient;
    quantity: number;
    unit: string;
    is_purchased: boolean;
}
