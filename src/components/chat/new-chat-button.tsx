import Link from "next/link";
import { useRouter } from "next/navigation";
import { createChat } from "@/src/lib/chat";
import { Plus } from "lucide-react";

export default function NewChatButton() {
  const router = useRouter();

  async function handleNewChat() {
    try {
      const chat = await createChat();

      router.push(`/chat/${chat.id}`);
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Link
        href="/chat"
        onClick={handleNewChat}
        className="mt-6 flex w-full items-center justify-center gap-2 cursor-pointer rounded-lg bg-linear-to-r from-violet-700 to-violet-700 px-3 py-2 font-medium text-gray-100 transition hover:scale-[1.01]"
      >
        <Plus className="h-5 w-5" />
        New Chat
      </Link>
    </>
  );
}
