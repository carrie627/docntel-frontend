// src/components/chat/typing-indicator.tsx

export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-2 w-fit rounded-2xl bg-white px-5 py-2 backdrop-blur-xl">
      <div className="flex gap-1">
        <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-500" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-500 [animation-delay:0.2s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-500 [animation-delay:0.4s]" />
      </div>

      <span className="text-sm text-zinc-500">
        AI is generating response...
      </span>
    </div>
  );
}
