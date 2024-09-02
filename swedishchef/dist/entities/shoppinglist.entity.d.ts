import { Household } from '../household/entities/household.entity';
export declare class ShoppingList {
    id: number;
    household_id: Household;
    created_at: Date;
    is_completed: boolean;
}
