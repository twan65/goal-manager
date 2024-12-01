import { client } from "../client";
import { GoalData } from "./types";

export interface CreateGoalParams {
  title: string;
  deadline: string;
  description: string;
  tags: string[];
}

export const goals = {
  // TODO: ページ単位で取得できるようにする
  getAll: () => 
    client.get<GoalData[]>('/goals'),

  create: (params: CreateGoalParams) => 
    client.post<GoalData>('/goals', params),
  
  update: (id: number, params: Partial<CreateGoalParams>) => 
    client.put<GoalData>(`/goals/${id}`, params),
  
  delete: (id: number) => 
    client.delete(`/goals/${id}`),
  
  toggleComplete: (id: number) => 
    client.post(`/goals/${id}/toggle`),
};