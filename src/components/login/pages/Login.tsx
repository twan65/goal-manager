// src/pages/Login.tsx
import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import Button from "../../common/Button";
import Text from "../../common/Text";
import { usePageTransition } from "../../../hooks/usePageTransition";
import Label from "../../common/Label";

const Login = () => {
  const { move } = usePageTransition();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      move("/me");
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow">
        <h2 className="text-3xl font-bold text-center mb-8">Goal Manager</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label>Email</Label>
            <Text
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <Label>Password</Label>
            <Text
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {error && <div className="text-red-500 text-sm">{error}</div>}

          <Button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
