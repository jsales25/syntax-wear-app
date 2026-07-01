import { useEffect, useState } from "react";
import {
  AuthContext,
  type Credentials,
  type RegisterInput,
  type User,
} from "./AuthContext";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch("http://localhost:3000/auth/profile", {
          method: "GET",
          credentials: "include", // faz com que os cookies sejam enviados junto com a requisição
        });

        if (!response.ok) {
          throw new Error("Erro ao buscar perfil do usuário");
        }

        const data = await response.json();
        setUser(data.user);
        setIsAuthenticated(true);
      
        console.log(data.user);
        
      } catch (error) {
        console.error("Erro ao buscar perfil do usuário:", error);
        setUser(null);
        setIsAuthenticated(false);
      }
    };

    fetchUserProfile();
  }, []);

  async function signIn(credentials: Credentials): Promise<void> {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      credentials: "include", // faz com que os cookies sejam enviados junto com a requisição
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Erro ao fazer login");
    }

    setUser(data.user);
    setIsAuthenticated(true);
  }

  async function register(data: RegisterInput): Promise<void> {}

  async function signOut(): Promise<void> {
    try {
      await fetch("http://localhost:3000/auth/signout", {
        method: "POST",
        credentials: "include", // faz com que os cookies sejam enviados junto com a requisição
      })

      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  }

  async function signInWithGoogle(credential: string): Promise<void> {
    const response = await fetch("http://localhost:3000/auth/google", {
      method: "POST",
      credentials: "include", // faz com que os cookies sejam enviados junto com a requisição
      headers: {
        "Content-Type": "application/json",
       },
      body: JSON.stringify({ credential }),
    });

    const result = await response.json();

    console.log("result:", result);
    
    if (!response.ok || !result.user) {
      throw new Error(result.message || "Erro ao fazer login com Google");
    }

    setUser(result.user);
    setIsAuthenticated(true);
  }

  const value = {
    user,
    isAuthenticated,
    signIn,
    register,
    signOut,
    signInWithGoogle
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
