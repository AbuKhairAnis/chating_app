import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (username, password) => {
    const success = handleError(username, password);
    if (!success) return;
    setLoading(true);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const user = await response.json();

      if (user.error) {
        throw new Error(user.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(user));
      setAuthUser(user);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;

const handleError = (username, password) => {
  if (!username || !password) {
    toast.error("All fields are required");
    return false;
  }
  if (password.length > 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }
  return true;
};
