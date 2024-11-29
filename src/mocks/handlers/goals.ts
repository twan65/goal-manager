// src/mocks/handlers/goals.ts
import { http, HttpResponse } from 'msw'
import { CreateGoalRequest, Goal } from '../types'

let goals: Goal[] = [
  {
    id: 1,
    title: "TypeScript勉強",
    deadline: "2024-12-31",
    description: "TypeScriptの基礎から中級まで",
    completed: false,
    tags: ["開発", "Typescript"]
  }
]

export const goalHandlers = [
  // 照会
  http.get('/api/goals', () => {
    return HttpResponse.json<Goal[]>(goals)
  }),

  // 作成
  http.post<never, CreateGoalRequest>('/api/goals', async ({ request }) => {
    const newGoal = await request.json()
    const goal: Goal = {
      id: goals.length + 1,
      ...newGoal,
      completed: false
    }
    goals.push(goal)
    return HttpResponse.json(goal)
  }),

  // 修正
  http.put<{ id: string }, Partial<CreateGoalRequest>>('/api/goals/:id', async ({ params, request }) => {
    const updates = await request.json()
    const id = Number(params.id)
    goals = goals.map(goal => 
      goal.id === id ? { ...goal, ...updates } : goal
    )
    const updatedGoal = goals.find(g => g.id === id)
    return HttpResponse.json(updatedGoal)
  }),

  // 削除
  http.delete<{ id: string }>('/api/goals/:id', ({ params }) => {
    const id = Number(params.id)
    goals = goals.filter(goal => goal.id !== id)
    return new HttpResponse(null, { status: 200 })
  })
]