// src/components/chat/demo-chat.tsx
import Link from "next/link";

import ChatInput from "./chat-input";
import AIMessage from "./ai-message";
import UserMessage from "./user-message";
import TypingIndicator from "./typing-indicator";

export default function DemoChat() {
  return (
    <div className="flex h-screen overflow-hidden flex-col justify-center relative">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center justify-center gap-2">
              <div className="flex items-center justify-center text-xl font-bold bg-linear-to-r from-[#7A1CAC] to-[#AD49E1] size-10 rounded-md">
                D
              </div>
              <div className="flex flex-col justify-center mt-2 mb-2">
                <span className="font-bold text-lg">Docntel</span>
                <span className="font-normal text-xs">
                  AI Knowledge Workspace
                </span>
              </div>
            </Link>
          </div>

          <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
            Demo Mode
          </div>
        </div>
      </header>

      {/* Chat */}
      <div className="mx-auto flex w-full flex-1 flex-col items-center px-4 py-10 overflow-y-auto">
        {/* Welcome */}
        <div className="mb-14 text-center max-w-4xl">
          <h1 className="text-5xl font-bold tracking-tight">
            Ask your documents anything
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-8 text-zinc-400">
            Experience grounded AI retrieval with streaming responses and source
            citations.
          </p>

          {/* Suggested prompts */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {[
              "Summarize this PDF",
              "Find key revenue insights",
              "Compare quarterly growth",
              "Explain technical concepts",
            ].map((prompt) => (
              <button
                key={prompt}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-300 transition hover:border-violet-500/30 hover:bg-white/10"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div className="space-y-8 pb-40 max-w-4xl">
          <UserMessage />

          <AIMessage />

          <TypingIndicator />
        </div>
      </div>

      <ChatInput />
    </div>
  );
}
