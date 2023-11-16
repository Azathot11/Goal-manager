
export interface  GoalModel {
    id: number;
    title?: string;
    description?: string;
    onDelete?: (id: number) => void;
}