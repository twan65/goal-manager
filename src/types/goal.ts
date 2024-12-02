export type Goal ={
    id: number;
    title: string;
    deadline: string;
    description: string;
    completed: boolean;
    tags: string[];
}
  
export interface CreateGoalRequest {
    title: string;
    deadline: string;
    description: string;
    tags: string[];
}
  
  export interface UpdateGoalRequest extends Partial<CreateGoalRequest> {
    completed?: boolean;
  }