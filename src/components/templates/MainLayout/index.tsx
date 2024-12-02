import { Button } from "@/components/atoms/Button";
import { useAuth } from "@/contexts/AuthContext";
import { usePageTransition } from "@/hooks/usePageTransition";
import { List, LogOut, User } from "lucide-react";

type MainLayoutProps = {
  children: React.ReactNode;
};

const navItems = [
  {
    path: "/me",
    label: "Me",
    icon: <User size={18} />,
  },
  {
    path: "/goals",
    label: "Goals",
    icon: <List size={18} />,
  },
];

export const MainLayout = ({ children }: MainLayoutProps) => {
  const { logout, user } = useAuth();
  const { move } = usePageTransition();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold">Goal Manager</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">{user?.name} 様</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={logout}
                className="flex items-center gap-2"
              >
                <LogOut size={18} />
                ログアウト
              </Button>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 h-12">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => move(item.path)}
                className={`
                  flex items-center gap-2 px-3 
                  border-b-2 transition-colors
                  ${
                    location.pathname === item.path
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }
                `}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

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
