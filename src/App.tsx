// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import GoalList from "./components/goals/pages/GoalList";
import GoalCreate from "./components/goals/pages/GoalCreate";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Login from "./components/login/pages/Login";
import Layout from "./components/common/Layout";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate to="/goals" replace />} />
            <Route
              path="/goals"
              element={
                <ProtectedRoute>
                  <GoalList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/goals/create"
              element={
                <ProtectedRoute>
                  <GoalCreate />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
