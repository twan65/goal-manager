import { MainLayout } from "@/components/templates/MainLayout";
import { GoalFormLayout } from "@/components/templates/GoalFormLayout";
import { GoalForm } from "@/components/organisms/GoalForm";
import { useAsync } from "@/hooks/useAsync";
import { api } from "@/api";
import { CreateGoalRequest } from "@/types";
import { usePageTransition } from "@/hooks/usePageTransition";

/**
 * 目標登録ページ
 * @returns 目標登録ページUI
 */
export const GoalCreatePage = () => {
  const { move } = usePageTransition();
  const { execute, loading } = useAsync();

  /**
   * 目標登録を行う
   * @param goal 目標情報
   */
  const handleSubmit = async (goal: CreateGoalRequest) => {
    await execute(() => api.goals.create(goal));
    move("/goals");
  };

  return (
    <MainLayout>
      <GoalFormLayout>
        <GoalForm onSubmit={handleSubmit} isLoading={loading} />
      </GoalFormLayout>
    </MainLayout>
  );
};
