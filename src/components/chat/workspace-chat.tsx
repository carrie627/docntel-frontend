"use client";

import Sidebar from "./sidebar";
import ChatInput from "./chat-input";
import AIMessage from "./ai-message";
import UserMessage from "./user-message";
import TypingIndicator from "./typing-indicator";
import { useState } from "react";
import { ChatSession } from "@/src/lib/chat";

export default function WorkspaceChat({
  initialChats,
}: {
  initialChats: ChatSession[];
}) {
  const [isNewChatButtonClicked, setIsNewChatButtonClicked] = useState(false);
  const [chatSessionTitle, setChatSessionTitle] = useState("");

  const handleNewChatButtonClick = (boolValue: boolean) => {
    setIsNewChatButtonClicked(boolValue);
  };

  const handleChatSession = (title: string) => {
    setChatSessionTitle(title);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        chatList={initialChats}
        onNewChatButtonClicked={handleNewChatButtonClick}
        onChatSessionClicked={handleChatSession}
      />

      <div className="flex flex-1 flex-col relative">
        <header className="sticky top-0 z-40 border-b border-white/10 bg-black/20 backdrop-blur-xl">
          <div className="flex items-center justify-between px-6 py-2">
            <div>
              <h1 className="text-lg font-semibold">
                {isNewChatButtonClicked ? "New Chat" : chatSessionTitle}
              </h1>

              {/* <p className="text-sm text-zinc-400">
                {isNewChatButtonClicked ? 0 : 12} documents indexed
              </p> */}
            </div>

            <button className="rounded-2xl cursor-pointer border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-zinc-200 transition hover:bg-white/10">
              Upload Documents
            </button>
          </div>
        </header>

        {/* <div className="flex-1 overflow-y-auto">
          {!isNewChatButtonClicked && (
            <div className="mx-auto w-full max-w-4xl flex-1 space-y-8 px-4 py-10 pb-40">
              <UserMessage />

              <AIMessage />

              <TypingIndicator />
            </div>
          )}
        </div> */}

        <ChatInput />
      </div>
    </div>
  );
}
