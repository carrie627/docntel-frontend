import { create } from "zustand";
import { useChatStore } from "@/src/stores/chat-store";

type SocketState = {
  socketStatus: string;
  chatHeaderData: any | null;
  // messageData: any | null;
  uploading: boolean;
  progress: number;
  status: string;
  savedDocId: string;

  setSocketStatus: (socketStatus: string) => void;
  setChatHeaderData: (chatHeaderData: any) => void;
  setUploading: (uploading: boolean) => void;
  setProgress: (progress: number) => void;
  setSavedDocId: (savedDocId: string) => void;

  connect: (chatId: string) => void;
  disconnect: () => void;
  sendMessage: (message: any) => void;
};

let socket: WebSocket | null = null;

export const useSocketStore = create<SocketState>((set, get) => ({
  socketStatus: "Disconnected",
  chatHeaderData: null,
  // messageData: null,
  uploading: false,
  progress: 0,
  status: "Idle",
  savedDocId: "",

  setSocketStatus: (socketStatus) => set({ socketStatus: socketStatus }),
  setChatHeaderData: (chatHeaderData) =>
    set(() => ({ chatHeaderData: chatHeaderData })),
  setUploading: (uploading) => set(() => ({ uploading: uploading })),
  setProgress: (progress) => set(() => ({ progress: progress })),
  setSavedDocId: (savedDocId) => set(() => ({ savedDocId: savedDocId })),

  connect: (chatId) => {
    if (socket && socket.readyState !== WebSocket.CLOSED) return;

    // setSocketStatus((socketStatus) => set(() => ({socketStatus: "Connecting"})));
    get().setSocketStatus("Connecting");

    socket = new WebSocket(`ws://localhost:8000/api/v1/chats/ws/${chatId}`);
    console.log("Chat connection store: ", socket);

    if (socket) {
      socket.onopen = () => set({ socketStatus: "Connected" });

      socket.onclose = () => set({ socketStatus: "Disconnected" });

      socket.onmessage = (event) => {
        console.log(useChatStore.getState().currentStreamingMessageId);

        console.log(useChatStore.getState().messages);
        try {
          const data = JSON.parse(event.data);

          switch (data.type) {
            case "chat_token":
              // set({ messageData: data });
              useChatStore
                .getState()
                .appendAssistantToken(
                  useChatStore.getState().currentStreamingMessageId!,
                  data.token,
                );
              break;
            case "chat_done":
              // set({ messageData: data });
              useChatStore.getState().setGenerating(false);
              useChatStore
                .getState()
                .setAssistantSources(
                  useChatStore.getState().currentStreamingMessageId!,
                  data.sources,
                );
              break;
            case "document_progress":
              // set({ chatHeaderData: data });
              // set({ progress: data.progress });
              // set({ status: data.status });
              // set({ uploading: true });
              set({
                chatHeaderData: data,
                progress: Number(data.progress),
                status: data.status,
                // uploading: true,
              });
              break;
            case "document_complete":
              // set({ chatHeaderData: data });
              // set({ progress: 100 });
              // set({ uploading: false });
              // set({ status: "Upload complete" });
              // set({ savedDocId: data.documentId });
              set({
                chatHeaderData: data,
                progress: 100,
                uploading: false,
                status: "Upload complete",
                savedDocId: data.documentId,
              });
              break;
            default:
              console.log("Unhandled event type:", data);
          }
        } catch (error) {
          console.error("Failed to parse WebSocket JSON payload", error);
        }
      };
    }
  },

  disconnect: () => {
    if (socket) {
      socket.close();
      socket = null;
    }
  },

  sendMessage: (message: any) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(message);
    }
  },
}));
