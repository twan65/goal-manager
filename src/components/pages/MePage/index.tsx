// pages/MePage/index.tsx
import { useEffect } from "react";
import { MainLayout } from "@/components/templates/MainLayout";
import { useAsync } from "@/hooks/useAsync";
import { api } from "@/api";
import { useAuth } from "@/contexts/AuthContext";

export const MePage = () => {
  const { user, updateUser } = useAuth();
  const { execute, loading, error } = useAsync();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userData = await execute(() => api.auth.me());
        updateUser(userData);
      } catch (error) {
        console.error("Failed to fetch user info:", error);
      }
    };

    fetchUserInfo();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!user) return null;

  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">내 정보</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-500">이름</label>
              <p className="mt-1">{user.name}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">
                이메일
              </label>
              <p className="mt-1">{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
