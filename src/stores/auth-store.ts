// src/stores/auth-store.ts

import { create } from "zustand";

// interface User {
//   username: string;
//   email?: string;
// }

// interface AuthState {
//   user: User | null;
//   isAuthenticated: boolean;

//   setUser: (user: User | null) => void;
//   logout: () => void;
// }

// export const useAuthStore = create<AuthState>((set) => ({
//   user: null,

//   isAuthenticated: false,

//   setUser: (user) =>
//     set({
//       user,
//       isAuthenticated: !!user,
//     }),

//   logout: () =>
//     set({
//       user: null,
//       isAuthenticated: false,
//     }),
// }));

import { persist } from "zustand/middleware";

interface AuthState {
  user: any | null;
  loginState: (userData: any, router: any) => void;
  logoutUser: (router: any) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,

      loginState: (userData, router) => {
        set({ user: userData });
        router.push("/chat"); // 🚀 Redirect to chat page
      },

      logoutUser: (router) => {
        set({ user: null });
        router.push("/login"); // 🚀 Redirect to login page
      },
    }),
    {
      name: "auth-storage", // Key name in localStorage
    },
  ),
);
