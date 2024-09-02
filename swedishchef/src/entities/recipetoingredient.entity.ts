import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Recipe } from './recipe.entity';

@Entity()
export class RecipeToIngredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  recipeId: number;

  @Column()
  ingredientId: number;

  @Column()
  quantity: number;

  @Column()
  unit: string;

  @ManyToOne(() => Recipe, (recipe) => recipe.recipeToIngredients)
  recipe: Recipe;
}
