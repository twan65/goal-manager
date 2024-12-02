// pages/MePage/index.tsx
import { useEffect } from "react";
import { MainLayout } from "@/components/templates/MainLayout";
import { useAsync } from "@/hooks/useAsync";
import { api } from "@/api";
import { useAuth } from "@/contexts/AuthContext";

/**
 * ログインユーザーページ
 * @returns ログインユーザーページUI
 */
export const MePage = () => {
  const { user } = useAuth();
  const { execute, loading, error } = useAsync();

  useEffect(() => {
    const fetchUserInfo = async () => {
      await execute(() => api.auth.me());
    };

    fetchUserInfo();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!user) return null;

  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Me</h2>
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
      </div>
    </MainLayout>
  );
};
