export interface GoalResponse {
    id: number;
    title: string;
    deadline: string;
    description: string;
    completed: boolean;
    tags: string[];
};