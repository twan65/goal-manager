// pages/GoalListPage/index.tsx
import { useNavigate } from "react-router-dom";
import { MainLayout } from "@/components/templates/MainLayout";
import { GoalListLayout } from "@/components/templates/GoalListLayout";
import { GoalList } from "@/components/organisms/GoalList";
import { Button } from "@/components/atoms/Button";
import { Plus } from "lucide-react";
import { useAsync } from "@/hooks/useAsync";
import { api } from "@/api";
import { useEffect } from "react";
import { usePageTransition } from "@/hooks/usePageTransition";

/**
 * 目標照会ページ
 * @returns 目標照会ページUI
 */
export const GoalListPage = () => {
  const { move } = usePageTransition();
  const { data: goals, loading, error, execute: fetchGoals } = useAsync();

  /**
   * 初期データ取得
   */
  useEffect(() => {
    fetchGoals(() => api.goals.getAll().then((res) => res.data));
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <MainLayout>
      <GoalListLayout
        action={
          <Button
            onClick={() => move("/goals/create")}
            className="flex items-center gap-2"
          >
            <Plus size={18} />
            New
          </Button>
        }
      >
        <GoalList goals={goals || []} isLoading={loading} />
      </GoalListLayout>
    </MainLayout>
  );
};
