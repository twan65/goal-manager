import { useCallback, useState } from "react";
import GoalInformation from "../GoalInformation";
import Main from "../../common/Main";
import Header from "../../common/Header";
import AddGoalButton from "../AddGoalButton";
import { GoalResponse } from "../model/Model";
import { usePageTransition } from "../../../hooks/usePageTransition";
import Goal from "../Goal";

const GoalList = () => {
  const { move } = usePageTransition();

  const [goals, setGoals] = useState<GoalResponse[]>([
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

  const deleteGoal = useCallback(
    (id: number) => {
      console.log(id);
      setGoals(goals.filter((goal) => goal.id !== id));
    },
    [goals]
  );

  const toggleGoal = useCallback(
    (id: number) => {
      console.log(goals.find((goal) => goal.id === id)?.completed);
      const newGoals = goals.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      );
      setGoals(newGoals);
    },
    [goals]
  );

  return (
    <Main>
      <Header title="목표 일람">
        <AddGoalButton onClick={() => move("/goals/create")} />
      </Header>

      {goals.map((goal) => (
        <Goal
          key={goal.id}
          id={goal.id}
          title={goal.title}
          deadline={goal.deadline}
          description={goal.description}
          tags={goal.tags}
          completed={goal.completed}
          toggleGoal={toggleGoal}
          deleteGoal={deleteGoal}
        />
      ))}
      <GoalInformation
        registeredGoalsCount={goals.length}
        completedGoalCount={goals.filter((g) => g.completed).length}
      />
    </Main>
  );
};

export default GoalList;
