import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Household } from '../household/entities/households.entity';

@Entity()
export class ShoppingList {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Household, (household) => household.id)
  household_id: Household;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column()
  is_completed: boolean;
}
