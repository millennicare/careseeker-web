import { useServerFn } from "@tanstack/react-start";
import { createContext, useContext } from "react";
import { getMeFn } from "@/routes/_auth/-api/get-me";
import type { components } from "@/types/api";

type AuthContextType = {
  isLoading: boolean;
  user: components["schemas"]["UserWithInformationSchema"] | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: user, isLoading, refetch } = useServerFn(getMeFn);

  return (
    <AuthContext.Provider value={{ user, isLoading, refetch }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
