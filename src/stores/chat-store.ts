import { create } from "zustand";

export type Chat = {
  id: string;
  title: string;
};

type MessageSource = {
  source: string;
  page: string;
  doc_id: string;
};

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources: MessageSource[] | null;
};

type ChatStore = {
  chats: Chat[];
  activeChatId: string | null;
  pendingMessage: string | null;
  messages: ChatMessage[];
  currentStreamingMessageId: string | null;

  isGenerating: boolean;

  socket: WebSocket | null;

  setGenerating: (value: boolean) => void;
  setChats: (chats: Chat[]) => void;
  setActiveChatId: (activeChatId: Chat["id"] | null) => void;

  setCurrentStreamingMessageId: (currentStreamingMessageId: string) => void;

  setSocket: (socket: WebSocket | null) => void;

  setMessages: (message: ChatMessage[]) => void;
  addMessage: (message: ChatMessage) => void;

  updateMessage: (id: string, updates: Partial<ChatMessage>) => void;

  replaceMessage: (tempId: string, message: ChatMessage) => void;

  appendAssistantToken: (id: string, token: string) => void;
  setAssistantSources: (id: string, sources: any[]) => void;

  removeMessage: (id: string) => void;
  clearMessages: () => void;

  setPendingMessage: (pendingMessage: string) => void;
  clearPendingMessage: () => void;

  addChat: (chat: Chat) => void;
};

export const useChatStore = create<ChatStore>((set) => ({
  chats: [],
  activeChatId: null,
  pendingMessage: null,

  isGenerating: false,

  currentStreamingMessageId: null,

  messages: [],

  socket: null,

  setGenerating: (value) => set({ isGenerating: value }),

  setCurrentStreamingMessageId: (currentStreamingMessageId) =>
    set({ currentStreamingMessageId }),

  setSocket: (socket) =>
    set({
      socket,
    }),

  setMessages: (messages) =>
    set(() => ({
      messages,
    })),

  updateMessage: (id, updates) =>
    set((state) => ({
      messages: state.messages.map((message) =>
        message.id === id
          ? {
              ...message,
              ...updates,
            }
          : message,
      ),
    })),

  appendToken: (id: string, token: string) =>
    set((state) => ({
      messages: state.messages.map((message) =>
        message.id === id
          ? {
              ...message,
              content: message.content + token,
            }
          : message,
      ),
    })),

  replaceMessage: (tempId, message) =>
    set((state) => ({
      messages: state.messages.map((m) => (m.id === tempId ? message : m)),
    })),

  removeMessage: (id) =>
    set((state) => ({
      messages: state.messages.filter((message) => message.id !== id),
    })),

  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),

  appendAssistantToken: (id: string, token: string) =>
    // set((state) => {
    //   const messages = [...state.messages];

    //   const last = messages[messages.length - 1];

    //   if (last?.role === "assistant") {
    //     last.content += token;
    //   }

    //   return { messages };
    // }),
    set((state) => ({
      messages: state.messages.map((message) =>
        message.id === id
          ? {
              ...message,
              content: message.content + token,
            }
          : message,
      ),
    })),

  setAssistantSources: (id: string, sources: any[]) =>
    set((state) => ({
      messages: state.messages.map((message) =>
        message.id === id
          ? {
              ...message,
              sources: sources, // Inject the final list of sources
            }
          : message,
      ),
    })),

  clearMessages: () =>
    set({
      messages: [],
    }),

  setChats: (chats) => set({ chats }),
  setActiveChatId: (activeChatId) => set({ activeChatId: activeChatId }),

  setPendingMessage: (pendingMessage) => set({ pendingMessage }),
  clearPendingMessage: () =>
    set({
      pendingMessage: null,
    }),
  addChat: (chat) =>
    set((state) => ({
      chats: [chat, ...state.chats],
    })),
}));
