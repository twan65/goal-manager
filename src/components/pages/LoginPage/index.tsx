// pages/LoginPage/index.tsx
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "@/components/templates/AuthLayout";
import { LoginForm } from "@/components/organisms/LoginForm";
import { useAsync } from "@/hooks/useAsync";
import { useAuth } from "@/contexts/AuthContext";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { execute, error, loading } = useAsync();

  const handleSubmit = async (email: string, password: string) => {
    try {
      await execute(() => login(email, password));
      navigate("/goals");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <AuthLayout>
      <LoginForm
        onSubmit={handleSubmit}
        isLoading={loading}
        error={error?.message}
      />
    </AuthLayout>
  );
};
