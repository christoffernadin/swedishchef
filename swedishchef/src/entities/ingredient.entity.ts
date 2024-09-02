import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RecipeToIngredient } from './recipetoingredient.entity';

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  category: string;

  @OneToMany(
    () => RecipeToIngredient,
    (recipeToIngredient) => recipeToIngredient.ingredientId,
  )
  recipeToIngredients: RecipeToIngredient[];
}
