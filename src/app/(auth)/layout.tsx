// src/app/(auth)/layout.tsx

import type { ReactNode } from "react";
import AuthPageHeader from "@/src/components/auth/auth-header";
import Footer from "@/src/components/footer";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative mx-auto max-w-7xl box-border">
      <AuthPageHeader />
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="flex items-center justify-center h-[calc(100vh-70px)]">
        {/* Left Branding */}
        <div className="hidden flex-1 flex-col justify-center border-r border-white/10 p-10 lg:flex h-full">
          <div className="max-w-lg mb-10">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em]  text-indigo-700">
              Intelligent AI Retrieval
            </p>

            <h2 className="text-5xl font-bold leading-tight tracking-tight">
              Chat with your documents intelligently.
            </h2>

            <p className="mt-6 text-lg leading-8">
              Upload PDFs, websites, and knowledge bases. Get instant AI-powered
              answers with streaming responses and citations.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "Hybrid vector + keyword retrieval",
                "Streaming AI responses",
                "Source citations & grounded answers",
                "Multi-document contextual chat",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-cyan-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <div className="space-y-4">
              <div className="ml-auto max-w-sm rounded-2xl rounded-br-md bg-linear-to-r from-violet-700 to-violet-700 px-4 py-3 text-sm text-gray-100">
                Summarize the uploaded financial report.
              </div>

              <div className="max-w-sm rounded-2xl rounded-bl-md  bg-[#2E073F] px-4 py-3 text-sm text-zinc-300">
                Revenue increased by 28% year-over-year, driven by enterprise
                subscriptions and global expansion.
                <div className="mt-3 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-2 text-xs text-cyan-200">
                  Source: report_2025.pdf · Page 12
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* Form Area */}
        <div className="flex flex-1 items-center justify-center p-6">
          {children}
        </div>
      </div>

      <Footer />
    </main>
  );
}
