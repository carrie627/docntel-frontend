"use client";

import { MessageSquare, Settings, LogOut } from "lucide-react";
import Link from "next/link";
import { ChatSession, createChat } from "@/src/lib/chat";
import { usePathname } from "next/navigation";
import { useChatStore } from "@/src/stores/chat-store";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import NewChatButton from "./new-chat-button";

interface SidebarProps {
  chatList: ChatSession[];
}

export default function Sidebar({ chatList }: SidebarProps) {
  const pathname = usePathname();
  const chatId = pathname.split("/").pop();

  const activeChatId = useChatStore((state) => state.activeChatId);
  const setActiveChatId = useChatStore((state) => state.setActiveChatId);

  useEffect(() => {
    if (chatId) {
      setActiveChatId(chatId); // Pass the string directly, not an object
    }
  }, [chatId, setActiveChatId]);

  console.log("Chat Id from sidebar: ", activeChatId);

  return (
    <aside className="hidden w-[300px] flex-col border-r border-gray-200 backdrop-blur-2xl lg:flex">
      <div className="border-b border-gray-200 p-5">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center justify-center gap-2">
            <div className="flex text-gray-100 items-center justify-center text-xl font-bold bg-linear-to-r from-violet-700 to-violet-700 size-10 rounded-md">
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

        <NewChatButton />
      </div>

      <div className="flex-1 space-y-2 overflow-y-auto p-4">
        {chatList.map((chat: any) => (
          <Link
            href={`/chat/${chat.id}`}
            key={chat.id}
            className={`flex w-full items-center gap-3 cursor-pointer rounded-lg px-4 py-2 text-left text-gray-700 hover:bg-gray-200 ${
              pathname === `/chat/${chat.id}` ? "bg-gray-200" : ""
            }`}
          >
            <MessageSquare className="h-4 w-4" />
            <span className="truncate">{chat.title}</span>
          </Link>
        ))}
      </div>

      <div className="border-t border-gray-200 p-4">
        <button className="cursor-pointer mb-1 flex w-full items-center gap-3 rounded-lg px-4 py-2 text-gray-700 transition hover:bg-gray-200">
          <Settings className="h-4 w-4" />
          Settings
        </button>

        <button className="cursor-pointer flex w-full items-center gap-3 rounded-lg px-4 py-2 text-red-300 transition hover:bg-red-500/10">
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </aside>
  );
}
