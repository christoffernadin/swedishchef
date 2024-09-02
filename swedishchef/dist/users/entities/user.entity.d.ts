import { Household } from '../../household/entities/household.entity';
export declare class User {
    id: number;
    username: string;
    email: string;
    password: string;
    household: Household;
    role: string;
}
