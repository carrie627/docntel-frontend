// src/components/auth/auth-card.tsx

import type { ReactNode } from "react";

export default function AuthCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="w-full max-w-md rounded-[2rem] bg-white/5 p-8 shadow-2xl backdrop-blur-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>

        <p className="mt-3 text-gray-700">{subtitle}</p>
      </div>

      {children}
    </div>
  );
}
