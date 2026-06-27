// src/components/auth/login-form.tsx

"use client";

import Link from "next/link";
import AuthCard from "./auth-card";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { login } from "@/src/lib/auth";
import { useAuthStore } from "@/src/stores/auth-store";

export default function LoginForm() {
  const router = useRouter();

  const loginState = useAuthStore((state) => state.loginState);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await login(formData);

      loginState(data, router);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard
      title="Welcome Back"
      subtitle="Sign in to continue to your AI workspace"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Username
          </label>

          <input
            type="text"
            value={formData.username}
            onChange={(e) =>
              setFormData({
                ...formData,
                username: e.target.value,
              })
            }
            placeholder="Enter your username"
            className="w-full rounded-xl border border-white/10 bg-black/10 px-4 py-3 text-gray-700 outline-none transition placeholder:text-gray-500 focus:border-violet-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Password
          </label>

          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
            placeholder="Enter your password"
            className="w-full rounded-xl border border-white/10 bg-black/10 px-4 py-3 text-gray-700 outline-none transition placeholder:text-gray-500 focus:border-violet-500"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-2xl cursor-pointer bg-linear-to-r from-violet-700 to-violet-700 px-5 py-3 font-semibold text-gray-100 transition hover:scale-[1.01]"
        >
          Sign In
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-700">
        Don&apos;t have an account?{" "}
        <Link
          href="/signup"
          className="font-medium text-violet-700 hover:text-violet-500"
        >
          Sign up
        </Link>
      </p>
    </AuthCard>
  );
}
