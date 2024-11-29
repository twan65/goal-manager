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

const GoalList = () => {
  const { move } = usePageTransition();
  // const { user, logout } = useAuth();
  const { loading, error, data: goals, execute } = useAsync<GoalData[]>();

  useEffect(() => {
    execute(() => api.goals.getAll().then((res) => res.data));
  }, [execute]);

  const deleteGoal = useCallback(
    (id: number) => {
      // setGoals(goals.filter((goal) => goal.id !== id));
    },
    [goals]
  );

  const toggleGoal = useCallback(
    (id: number) => {
      execute(() => api.goals.toggleComplete(id).then((res) => res.data));
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
