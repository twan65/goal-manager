import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/common/ProtectedRoute";
import { LoginPage } from "./components/pages/LoginPage";
import { GoalListPage } from "./components/pages/GoalListPage";
import { MePage } from "./components/pages/MePage";
import { GoalCreatePage } from "./components/pages/GoalCreatePage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Navigate to="/goals" replace />} />
          <Route
            path="/me"
            element={
              <ProtectedRoute>
                <MePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/goals"
            element={
              <ProtectedRoute>
                <GoalListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/goals/create"
            element={
              <ProtectedRoute>
                <GoalCreatePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
