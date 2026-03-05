import { createContext, useState } from "react";

// إنشاء Context
export const AuthContext = createContext(null);

// الـ Provider
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(
    localStorage.getItem("currentUserEmail")
      ? { email: localStorage.getItem("currentUserEmail") }
      : null
  );

  function signUp(email, password) {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      return { success: false, error: "Email already exists" };
    }

    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUserEmail", email);
    setUser({ email });
    return { success: true };
  }

  function login(email, password) {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const existingUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!existingUser) {
      return { success: false, error: "Invalid email or password" };
    }

    localStorage.setItem("currentUserEmail", email);
    setUser({ email });
    return { success: true };
  }

  function logout() {
    localStorage.removeItem("currentUserEmail");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, signUp, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}