import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ShoppingList } from './shoppinglist.entity';
import { Ingredient } from './ingredient.entity';

@Entity()
export class ShoppingListItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ShoppingList, (shoppingList) => shoppingList.id)
  shopping_list_id: ShoppingList;

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.id)
  ingredient_id: Ingredient;

  @Column()
  quantity: number;

  @Column()
  unit: string;

  @Column()
  is_purchased: boolean;
}
