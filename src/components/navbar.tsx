"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { logout } from "../lib/auth";
import { useAuthStore } from "../stores/auth-store";

export default function Navbar() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { user, logoutUser } = useAuthStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent server rendering from guessing the user's login state
  if (!mounted) return null;

  const handleLogout = async () => {
    await logout();

    logoutUser(router);
  };

  return (
    <div className="h-full w-full flex justify-between items-center lg:px-8 py-8">
      <Link href="/" className="flex items-center justify-center gap-2">
        <div className="flex items-center justify-center text-xl font-bold bg-linear-to-r from-violet-700 to-violet-700 size-10 rounded-md text-gray-100">
          D
        </div>
        <div className="flex flex-col justify-center mt-2 mb-2">
          <span className="font-bold text-lg">Docntel</span>
          <span className="font-normal text-xs">AI Knowledge Workspace</span>
        </div>
      </Link>
      <nav className="flex justify-between items-center gap-6 text-sm">
        <Link href="#features" className="hover:text-gray-500">
          Features
        </Link>
        <Link href="#how-it-works" className="hover:text-gray-500">
          How It Works
        </Link>
        <Link href="/demo" className="hover:text-gray-500">
          Demo
        </Link>
      </nav>

      <div className="flex items-center gap-6 text-sm">
        {/* User not working properly here. taking me to chat even after logout. Supposed to take to /signup. */}
        {user ? (
          <button
            className="bg-violet-700 flex items-center justify-center cursor-pointer py-2 w-[70px] rounded-sm text-gray-100"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="bg-violet-700 flex items-center justify-center py-2 w-[70px] rounded-sm text-gray-100"
          >
            Log In
          </Link>
        )}
        <Link
          href={user ? "/chat" : "/signup"}
          className="bg-violet-700 flex items-center justify-center py-2 w-24 rounded-sm text-gray-100"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
