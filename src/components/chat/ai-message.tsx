import SourceCard from "./source-card";
import { ChatMessage } from "@/src/stores/chat-store";

// type Message = {
//   id: string;
//   role: "user" | "assistant";
//   content: string;
//   sources: string | null;
// };

export default function AIMessage({ message }: { message: ChatMessage }) {
  return (
    <div className="max-w-3xl">
      <div className="rounded-[2rem] rounded-bl-md bg-white p-6 backdrop-blur-xl">
        <p className="leading-8 text-gray-900">
          {/* Revenue increased by{" "}
          <span className="font-semibold text-cyan-300">28%</span>{" "}
          year-over-year, driven by enterprise subscriptions and international
          expansion. year-over-year, driven by enterprise subscriptions and
          international expansion.year-over-year, driven by enterprise
          subscriptions and international expansion.year-over-year, driven by
          enterprise subscriptions and international expansion.year-over-year,
          driven by enterprise subscriptions and international
          expansion.year-over-year, driven by enterprise subscriptions and
          international expansion.year-over-year, driven by enterprise
          subscriptions and international expansion.year-over-year, driven by
          enterprise subscriptions and international expansion. year-over-year,
          driven by enterprise subscriptions and international expansion. */}

          {message.content}
        </p>

        {message.sources && <SourceCard msgSources={message.sources} />}
      </div>
    </div>
  );
}
