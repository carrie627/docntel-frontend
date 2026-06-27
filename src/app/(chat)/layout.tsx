import type { ReactNode } from "react";

export default function ChatLayout({ children }: { children: ReactNode }) {
  return <main className="min-h-screen">{children}</main>;
}
