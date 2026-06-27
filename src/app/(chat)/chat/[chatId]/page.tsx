"use client";

import UserMessage from "@/src/components/chat/user-message";
import AIMessage from "@/src/components/chat/ai-message";
import TypingIndicator from "@/src/components/chat/typing-indicator";
import { getMessages } from "@/src/lib/chat";
import { usePathname } from "next/navigation";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { useChatStore } from "@/src/stores/chat-store";
import { ChatMessage } from "@/src/stores/chat-store";
import { useSocketStore } from "@/src/stores/useSocketStore";

// type Message = {
//   id: string;
//   role: "user" | "assistant";
//   content: string;
//   sources: string | null;
// };

export default function UserChat() {
  const pathname = usePathname();
  const chatId = pathname.split("/").pop();
  const bottomRef = useRef<HTMLDivElement>(null);

  const connect = useSocketStore((state) => state.connect);
  const disconnect = useSocketStore((state) => state.disconnect);

  // const [messages, setMessages] = useState<ChatMessage[]>([]);
  // These 2 not working properly. has to use the useState messages state. have to fix here the first.
  const messages = useChatStore((state) => state.messages);
  const setMessages = useChatStore((state) => state.setMessages);
  const isGenerating = useChatStore((state) => state.isGenerating);
  const currentStreamingMessageId = useChatStore(
    (state) => state.currentStreamingMessageId,
  );

  useEffect(() => {
    if (!chatId) return;
    console.log("Fetching messages");

    connect(chatId);

    const fetchMessages = async () => {
      try {
        const data = await getMessages(chatId);
        console.log("Message data", data);
        setMessages(data);
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      }
    };

    fetchMessages();
    return () => disconnect();
  }, [chatId, connect, disconnect]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages.length]);

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="mx-auto w-full max-w-4xl flex-1 space-y-8 px-4 py-10 pb-40">
        {/* {messages.length > 0 &&
          messages.map((message: ChatMessage) =>
            message.role === "user" ? (
              <UserMessage key={message.id} message={message} />
            ) : (
              (isGenerating && <TypingIndicator />)
              message.content.length > 0 && (
                <AIMessage key={message.id} message={message} />
              )
            ),
          )} */}

        {messages.map((message) => (
          <Fragment key={message.id}>
            {isGenerating &&
              message.id === currentStreamingMessageId &&
              message.content.length === 0 && <TypingIndicator />}

            {message.role === "user" ? (
              <UserMessage message={message} />
            ) : (
              message.content.length > 0 && <AIMessage message={message} />
            )}
          </Fragment>
        ))}
      </div>
      <div ref={bottomRef} />
    </div>
  );
}
