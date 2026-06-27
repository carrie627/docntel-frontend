import { ChatMessage } from "@/src/stores/chat-store";

// type Message = {
//   id: string;
//   role: "user" | "assistant";
//   content: string;
// };

export default function UserMessage({ message }: { message: ChatMessage }) {
  return (
    <div className="ml-auto max-w-2xl">
      <div className="rounded-[2rem] rounded-br-md bg-violet-500 p-5 text-white">
        {/* Summarize the uploaded annual report revenue growth. */}
        {message.content}
      </div>
    </div>
  );
}
