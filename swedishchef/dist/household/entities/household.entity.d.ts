import { User } from '../../users/entities/user.entity';
export declare class Household {
    id: number;
    name: string;
    users: User[];
    created_at: Date;
}
