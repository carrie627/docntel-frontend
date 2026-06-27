// src/components/auth/signup-form.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import AuthCard from "./auth-card";
import { signup } from "@/src/lib/auth";
import { useAuthStore } from "@/src/stores/auth-store";

export default function SignupForm() {
  const router = useRouter();
  const loginState = useAuthStore((state) => state.loginState);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    full_name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const user = await signup(formData);
      loginState(user, router);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard
      title="Create your account"
      subtitle="Start building with your AI knowledge workspace"
    >
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Username
          </label>

          <input
            type="text"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            placeholder="Choose a username"
            className="w-full rounded-xl border border-white/10 bg-black/10 px-4 py-3 text-gray-700 outline-none transition placeholder:text-gray-500 focus:border-violet-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Full Name
          </label>

          <input
            type="text"
            value={formData.full_name}
            onChange={(e) =>
              setFormData({ ...formData, full_name: e.target.value })
            }
            placeholder="Choose a full-name"
            className="w-full rounded-xl border border-white/10 bg-black/10 px-4 py-3 text-gray-700 outline-none transition placeholder:text-gray-500 focus:border-violet-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Email
          </label>

          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Enter your email"
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
              setFormData({ ...formData, password: e.target.value })
            }
            placeholder="Create a password"
            className="w-full rounded-xl border border-white/10 bg-black/10 px-4 py-3 text-gray-700 outline-none transition placeholder:text-gray-500 focus:border-violet-500"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-2xl cursor-pointer bg-linear-to-r from-violet-700 to-violet-700 px-5 py-3 font-semibold text-gray-100 transition hover:scale-[1.01]"
        >
          Create Account
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-700">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-violet-700 hover:text-violet-500"
        >
          Sign in
        </Link>
      </p>
    </AuthCard>
  );
}
