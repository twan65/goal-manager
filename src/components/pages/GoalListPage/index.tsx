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

export const GoalListPage = () => {
  const navigate = useNavigate();
  const { data: goals, loading, error, execute: fetchGoals } = useAsync();

  useEffect(() => {
    fetchGoals(() => api.goals.getAll().then((res) => res.data));
  }, []);

  const handleToggle = async (id: number) => {
    try {
      await api.goals.toggleComplete(id);
      fetchGoals(() => api.goals.getAll());
    } catch (error) {
      console.error("Failed to toggle goal:", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await api.goals.delete(id);
      fetchGoals(() => api.goals.getAll());
    } catch (error) {
      console.error("Failed to delete goal:", error);
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <MainLayout>
      <GoalListLayout
        action={
          <Button
            onClick={() => navigate("/goals/create")}
            className="flex items-center gap-2"
          >
            <Plus size={18} />새 목표
          </Button>
        }
      >
        <GoalList
          goals={goals || []}
          onToggle={handleToggle}
          onDelete={handleDelete}
          isLoading={loading}
        />
      </GoalListLayout>
    </MainLayout>
  );
};
