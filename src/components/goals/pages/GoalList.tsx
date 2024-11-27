import { useState } from "react";
import { Check, Trash2 } from "lucide-react";
import GoalInformation from "../GoalInformation";
import Main from "../../common/Main";
import Header from "../../common/Header";
import AddGoalButton from "../AddGoalButton";
import { Goal } from "../model/Model";
import { usePageTransition } from "../../../hooks/usePageTransition";

const GoalList = () => {
  const { move } = usePageTransition();

  const [goals, setGoals] = useState<Goal[]>([
    {
      id: 1,
      title: "TypeScript 마스터하기",
      deadline: "2024-12-31",
      description: "제네릭, 타입 추론 등 심화 개념 학습하기",
      completed: false,
      tags: ["학습", "개발", "커리어"],
    },
    {
      id: 2,
      title: "오픈 소스 프로젝트 기여하기",
      deadline: "2024-08-30",
      description: "React 생태계의 오픈 소스 프로젝트에 PR 보내기",
      completed: true,
      tags: ["개발", "오픈소스"],
    },
  ]);

  const deleteGoal = (id: number) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  const toggleGoal = (id: number) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };

  return (
    <Main>
      <Header title="목표 일람">
        <AddGoalButton onClick={() => move("/goals/create")} />
      </Header>

      <div className="space-y-4">
        {goals.map((goal) => (
          <div
            key={goal.id}
            className="flex items-center justify-between p-4 border rounded hover:bg-gray-50"
          >
            <div className="flex items-center gap-4">
              <button
                onClick={() => toggleGoal(goal.id)}
                className={`${
                  goal.completed ? "text-green-500" : "text-gray-300"
                } hover:text-green-600`}
              >
                <Check size={24} />
              </button>
              <div>
                <p
                  className={`font-medium ${
                    goal.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {goal.title}
                </p>
                <p className="text-sm text-gray-500">마감일: {goal.deadline}</p>
                {goal.description && (
                  <p className="text-sm text-gray-600 mt-1">
                    {goal.description}
                  </p>
                )}
                {goal.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {goal.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <button
              onClick={() => deleteGoal(goal.id)}
              className="text-red-500 hover:text-red-600"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>
      <GoalInformation
        registeredGoalsCount={goals.length}
        completedGoalCount={goals.filter((g) => g.completed).length}
      />
    </Main>
  );
};

export default GoalList;
