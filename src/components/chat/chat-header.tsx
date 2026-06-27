"use client";

import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { uploadDocument } from "@/src/lib/document";
import { useSocketStore } from "@/src/stores/useSocketStore";
import { useChatStore } from "@/src/stores/chat-store";

interface ChatSession {
  id: string;
  title: string;
}

interface ChatHeaderProps {
  chatList: ChatSession[];
}

const ALLOWED_TYPES = [
  "application/pdf",
  "text/plain",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export default function ChatHeader({ chatList }: ChatHeaderProps) {
  const pathname = usePathname();

  const chatId = pathname.split("/").pop();
  const chat = chatList.find((c) => c.id === chatId);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // const [uploading, setUploading] = useState(false);
  // const [progress, setProgress] = useState(0);
  // const [status, setStatus] = useState("Idle");
  // const [savedDocId, setSavedDocId] = useState<string | null>(null);
  const isUploading = useSocketStore((state) => state.uploading);
  const progress = useSocketStore((state) => state.progress);
  const status = useSocketStore((state) => state.status);
  const savedDocId = useSocketStore((state) => state.savedDocId);
  // const connect = useSocketStore((state) => state.connect);
  // const disconnect = useSocketStore((state) => state.disconnect);
  const setUploading = useSocketStore((state) => state.setUploading);
  const addMessage = useChatStore((state) => state.addMessage);

  // useEffect(() => {
  //   if (chatId) {
  //     connect(chatId);
  //   }

  //   return () => disconnect();
  // }, [connect, disconnect]);

  const handleUpload = () => {
    if (!chatId || !chat) {
      alert("Please create or open a chat before uploading documents.");
      return;
    }

    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!ALLOWED_TYPES.includes(file.type)) {
      alert("Only PDF, TXT and DOCX files are supported.");
      e.target.value = "";
      return;
    }

    try {
      setUploading(true);
      // setStatus("Initializing connection...");
      // setProgress(0);
      // setSavedDocId(null);

      const res = await uploadDocument(file, chatId!);
      console.log("Document response: ", res);
      addMessage(res);
    } catch (error) {
      console.error(error);
    } finally {
      // setUploading(false);
      e.target.value = "";
    }
  };

  return (
    <header className="border-b border-gray-200 backdrop-blur-xl shrink-0">
      <div className="flex items-center justify-between px-6 py-2">
        <div>
          <h1 className="text-lg font-semibold">{chat?.title ?? "New Chat"}</h1>
        </div>

        <>
          <input
            ref={fileInputRef}
            type="file"
            hidden
            accept=".pdf,.txt,.docx"
            onChange={handleFileChange}
          />

          {/* <button
            disabled={uploading}
            onClick={handleUpload}
            className="rounded-2xl cursor-pointer bg-violet-700 px-5 py-2 text-sm font-medium text-gray-100 transition hover:bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {uploading ? "Uploading..." : "Upload Documents"}
          </button> */}

          <button
            disabled={isUploading}
            onClick={handleUpload}
            className="relative overflow-hidden rounded-2xl cursor-pointer bg-violet-700 px-6 py-2 text-white transition-all disabled:cursor-not-allowed"
          >
            {isUploading && (
              <div
                className="absolute left-0 top-0 h-full bg-violet-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            )}

            <span className="relative z-10">
              {isUploading ? `${progress}%` : "Upload Documents"}
            </span>
          </button>
        </>
      </div>
    </header>
  );
}
