import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../users/entities/user.entity';
import { RecipeToIngredient } from './recipetoingredient.entity';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  instructions: string;

  @ManyToOne(() => User, (user) => user.id)
  created_by: User;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column()
  is_public: boolean;

  @OneToMany(
    () => RecipeToIngredient,
    (recipeToIngredient) => recipeToIngredient.recipeId,
  )
  public recipeToIngredients: RecipeToIngredient[];
}
