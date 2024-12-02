// pages/GoalCreatePage/index.tsx
import { useNavigate } from "react-router-dom";
import { MainLayout } from "@/components/templates/MainLayout";
import { GoalFormLayout } from "@/components/templates/GoalFormLayout";
import { GoalForm } from "@/components/organisms/GoalForm";
import { useAsync } from "@/hooks/useAsync";
import { api } from "@/api";
import { CreateGoalRequest } from "@/types";

export const GoalCreatePage = () => {
  const navigate = useNavigate();
  const { execute, loading } = useAsync();

  const handleSubmit = async (data: CreateGoalRequest) => {
    try {
      await execute(() => api.goals.create(data));
      navigate("/goals");
    } catch (error) {
      console.error("Failed to create goal:", error);
    }
  };

  return (
    <MainLayout>
      <GoalFormLayout onBack={() => navigate("/goals")}>
        <GoalForm onSubmit={handleSubmit} isLoading={loading} />
      </GoalFormLayout>
    </MainLayout>
  );
};
