// src/lib/auth.ts

import { apiFetch } from "./api";

export async function signup(data: {
  username: string;
  full_name: string;
  email: string;
  password: string;
}) {
  try {
    const response = await apiFetch.post("/api/v1/users/create", data);
    return response;
  } catch (error) {
    console.error("Signup failed", error);
  }
}

// src/lib/auth.ts

export async function login(data: { username: string; password: string }) {
  const formData = new URLSearchParams();
  formData.append("username", data.username);
  formData.append("password", data.password);

  try {
    const response = await apiFetch.post("/api/v1/users/token", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response;
  } catch (error) {
    console.error("Log in failed", error);
  }
}

// src/lib/auth.ts

export async function logout() {
  try {
    const response = await apiFetch.post("/api/v1/users/logout");
    return response;
  } catch (error) {
    console.error("Logout failed", error);
  }
}
