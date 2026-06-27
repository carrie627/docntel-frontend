import { getChats } from "@/src/lib/chat";
import Sidebar from "@/src/components/chat/sidebar";
import ChatInput from "@/src/components/chat/chat-input";
import ChatHeader from "@/src/components/chat/chat-header";

export default async function UserChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userChats = await getChats();

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar chatList={userChats} />

      <div className="flex flex-1 flex-col relative">
        <ChatHeader chatList={userChats} />

        {children}

        <ChatInput />
      </div>
    </div>
  );
}
