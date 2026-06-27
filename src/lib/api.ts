// src/lib/api.ts
import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

const API_BASE_URL = "http://localhost:8000";

// export async function apiFetch(endpoint: string, options?: RequestInit) {
//   try {
//     const response = await fetch(`${API_BASE_URL}${endpoint}`, {
//       ...options,

//       credentials: "include",

//       headers: {
//         "Content-Type": "application/json",
//         ...(options?.headers || {}),
//       },
//     });

//     // 👇 FIX: Extract the server's error message before throwing
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     return response.json();
//   } catch (error) {
//     console.error("Fetch Failed: ", error);
//   }
// }

export const apiFetch = axios.create({
  baseURL: `${API_BASE_URL}`,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
