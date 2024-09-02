import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Household } from '../household/entities/household.entity';
import { Ingredient } from './ingredient.entity';

@Entity()
export class Pantry {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Household, (household) => household.id)
  household_id: Household;

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.id)
  ingredient_id: Ingredient;

  @Column()
  quantity: number;

  @Column()
  unit: string;
}
