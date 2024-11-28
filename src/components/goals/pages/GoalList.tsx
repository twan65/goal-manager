import { useCallback, useEffect } from "react";
import GoalInformation from "../GoalInformation";
import Main from "../../common/Main";
import Header from "../../common/Header";
import AddGoalButton from "../AddGoalButton";
import { usePageTransition } from "../../../hooks/usePageTransition";
import Goal from "../Goal";
import { useAsync } from "../../../hooks/useAsync";
import { api } from "../../../api";
import { GoalData } from "../../../api/goals/types";

const dummyGoals: GoalData[] = [
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
];

const GoalList = () => {
  const { move } = usePageTransition();
  // const { user, logout } = useAuth();
  const { loading, error, data: goals, execute } = useAsync<GoalData[]>();

  useEffect(() => {
    execute(() => api.goals.getAll().then((res) => dummyGoals));
  }, [execute]);

  const deleteGoal = useCallback(
    (id: number) => {
      // setGoals(goals.filter((goal) => goal.id !== id));
    },
    [goals]
  );

  const toggleGoal = useCallback(
    (id: number) => {
      // const newGoals = goals.map((goal) =>
      //   goal.id === id ? { ...goal, completed: !goal.completed } : goal
      // );
      // setGoals(newGoals);
    },
    [goals]
  );

  if (loading) return <div>Loading..</div>;
  if (error) return <div>エラーが発生しました</div>;
  if (!goals) return null;

  return (
    <Main>
      <Header title="Goals">
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
