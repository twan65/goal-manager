// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import GoalList from "./components/goals/pages/GoalList";
import GoalCreate from "./components/goals/pages/GoalCreate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/goals" replace />} />
        <Route path="/goals" element={<GoalList />} />
        <Route path="/goals/create" element={<GoalCreate />} />
      </Routes>
    </Router>
  );
}

export default App;
