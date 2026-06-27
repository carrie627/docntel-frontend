"use client";

import { ChatMessage, useChatStore } from "@/src/stores/chat-store";
import { useSocketStore } from "@/src/stores/useSocketStore";
import { ArrowUp } from "lucide-react";
import { useState } from "react";

export default function ChatInput() {
  const [message, setMessage] = useState("");
  const chatId = useChatStore((state) => state.activeChatId);
  const addMessage = useChatStore((state) => state.addMessage);
  const setGenerating = useChatStore((state) => state.setGenerating);
  const sendMessage = useSocketStore((state) => state.sendMessage);
  const setCurrentStreamingMessageId = useChatStore(
    (state) => state.setCurrentStreamingMessageId,
  );

  const handleSubmit = () => {
    console.log("Chat Id from Chat input: ", chatId);

    if (!message.trim()) return;

    console.log("Chat message from input: ", message);

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: message,
      sources: null,
    };

    addMessage(userMessage);

    const assistantId = crypto.randomUUID();

    setCurrentStreamingMessageId(assistantId);

    addMessage({
      id: assistantId,
      role: "assistant",
      content: "",
      sources: null,
    });

    sendMessage(message);
    setGenerating(true);
    setMessage("");
  };

  return (
    <div className="absolute bottom-0 left-0 w-full flex justify-center px-4 pb-2">
      <div className="flex w-full max-w-4xl items-center gap-3 rounded-[1rem] border border-gray-300 bg-gray-100 p-2 shadow-2xl backdrop-blur-2xl">
        <textarea
          placeholder="Ask anything about your documents..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={1}
          className="no-scrollbar max-h-80 min-h-[52px] flex-1 resize-none bg-transparent px-3 py-4 text-gray-700 outline-none placeholder:text-gray-500"
        />

        <button
          onClick={handleSubmit}
          className="flex h-10 w-10 shrink-0 items-center justify-center cursor-pointer rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-700 text-black transition hover:scale-105"
        >
          <ArrowUp className="h-4 w-4 text-gray-100" />
        </button>
      </div>
    </div>
  );
}
