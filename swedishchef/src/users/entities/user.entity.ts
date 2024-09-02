import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Household } from '../../household/entities/household.entity';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @ManyToOne(() => Household, (household) => household.users)
  household: Household;

  @Column()
  role: string;
}
