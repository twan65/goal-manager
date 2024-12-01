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
  const {
    loading,
    error,
    data: goals,
    execute: getAllExecute,
  } = useAsync<GoalData[]>();
  // const { execute: deleteExecute } = useAsync();
  // const { execute: toggleCompletedExecute } = useAsync();

  useEffect(() => {
    getAllExecute(() => api.goals.getAll().then((res) => res.data));
  }, [getAllExecute]);

  // const deleteGoal = useCallback((id: number) => {
  //   deleteExecute(() => api.goals.delete(id));
  // }, []);

  // const toggleGoal = useCallback(
  //   (id: number) => {
  //     toggleCompletedExecute(() => api.goals.toggleComplete(id));
  //   },
  //   [goals]
  // );

  if (loading) return <div>Loading..</div>;
  if (error) return <div>エラーが発生しました</div>;

  return (
    <Main>
      <Header title="Goals">
        <AddGoalButton onClick={() => move("/goals/create")} />
      </Header>

      {goals?.map((goal) => (
        <Goal
          key={goal.id}
          id={goal.id}
          title={goal.title}
          deadline={goal.deadline}
          description={goal.description}
          tags={goal.tags}
          completed={goal.completed}
          // toggleGoal={toggleGoal}
          // deleteGoal={deleteGoal}
        />
      ))}
      <GoalInformation
        registeredGoalsCount={goals ? goals.length : 0}
        completedGoalCount={goals ? goals.filter((g) => g.completed).length : 0}
      />
    </Main>
  );
};

export default GoalList;
