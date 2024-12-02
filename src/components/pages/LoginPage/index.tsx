import { AuthLayout } from "@/components/templates/AuthLayout";
import { LoginForm } from "@/components/organisms/LoginForm";
import { useAsync } from "@/hooks/useAsync";
import { useAuth } from "@/contexts/AuthContext";
import { usePageTransition } from "@/hooks/usePageTransition";

/**
 * ログインページ
 * @returns ログインページUI
 */
export const LoginPage = () => {
  const { move } = usePageTransition();
  const { login } = useAuth();
  const { execute, error, loading } = useAsync();

  /**
   * ログインを行う。
   * @param email メールアドレス
   * @param password パスワード
   */
  const handleSubmit = async (email: string, password: string) => {
    await execute(() => login(email, password));
    move("/me");
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
