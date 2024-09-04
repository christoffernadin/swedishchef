import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Recipe } from './recipe.entity';
import { Household } from '../household/entities/households.entity';

@Entity()
export class RecipeUsageLog {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Recipe, (recipe) => recipe.id)
  recipe_id: Recipe;

  @ManyToOne(() => Household, (household) => household.id)
  household_id: Household;

  @Column()
  cooked_at: Date;
}
