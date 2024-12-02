import { Button } from "@/components/atoms/Button";
import { useAuth } from "@/contexts/AuthContext";
import { LogOut } from "lucide-react";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const { logout, user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold">Goal Manager</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">
                {user?.name}님 환영합니다
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={logout}
                className="flex items-center gap-2"
              >
                <LogOut size={18} />
                로그아웃
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-gray-500">
            <a
              href="https://github.com/your-username/goal-manager"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
