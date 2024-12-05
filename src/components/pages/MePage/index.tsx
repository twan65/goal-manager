// pages/MePage/index.tsx
import { useEffect } from "react";
import { MainLayout } from "@/components/templates/MainLayout";
import { useAsync } from "@/hooks/useAsync";
import { api } from "@/api";
import { useAuth } from "@/contexts/AuthContext";
import { GoalListLayout } from "@/components/templates/GoalListLayout";
import { Button } from "@/components/atoms/Button";
import { Plus } from "lucide-react";
import { GoalList } from "@/components/organisms/GoalList";
import { usePageTransition } from "@/hooks/usePageTransition";
import { MyLayout } from "@/components/templates/MyLayout/MyLayout";

/**
 * ログインユーザーページ
 * @returns ログインユーザーページUI
 */
export const MePage = () => {
  const { user } = useAuth();
  const { move } = usePageTransition();
  const { data: goals, loading, error, execute: fetchGoals } = useAsync();

  useEffect(() => {
    fetchGoals(() => api.goals.getAll().then((res) => res.data));
  }, []);

  const handleToggle = async (id: number) => {
    await api.goals.toggleComplete(id);
    fetchGoals(() => api.goals.getAll().then((res) => res.data));
  };

  const handleDelete = async (id: number) => {
    await api.goals.delete(id);
    fetchGoals(() => api.goals.getAll().then((res) => res.data));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!user) return null;

  return (
    <MainLayout>
      <MyLayout
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
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-500">氏名</label>
              <p className="mt-1">{user.name}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">
                メールアドレス
              </label>
              <p className="mt-1">{user.email}</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">My Goals</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-500">目標</label>
              <GoalList
                goals={goals || []}
                onToggle={handleToggle}
                onDelete={handleDelete}
                isLoading={loading}
              />
            </div>
          </div>
        </div>
      </MyLayout>
    </MainLayout>
  );
};
