"use server";

import { apiFetch } from "./api";
import { cookies, headers } from "next/headers";

export interface ChatSession {
  id: string;
  title: string;
  created_at: string;
}

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  created_at: string;
}

// Fetch all historical chats for the logged-in user
export async function getChats(): Promise<ChatSession[]> {
  const cookieStore = await cookies();
  const cookieString = cookieStore.toString();

  const res = await apiFetch.get("/api/v1/chats", {
    headers: { Cookie: cookieString },
  });
  return res.data;
}

export async function getMessages(chatId: string) {
  const cookieStore = await cookies();
  const cookieString = cookieStore.toString();

  try {
    const res = await apiFetch.get(`/api/v1/chats/${chatId}/messages`, {
      headers: { Cookie: cookieString },
    });

    return res.data;
  } catch (error) {
    console.error("Error fetching msg: ", error);
  }
}

// // Fetch individual messages belonging to a single chat session
// export async function getChatMessages(chatId: string): Promise<Message[]> {
//   return apiFetch(`/api/v1/chats/${chatId}/messages`);
// }

// // Send a new message string to a specific chat session
// export async function sendMessage(
//   chatId: string,
//   content: string,
// ): Promise<Message> {
//   return apiFetch(`/api/v1/chats/${chatId}/messages`, {
//     method: "POST",
//     body: JSON.stringify({ content }),
//   });
// }

export async function createChat() {
  const cookieStore = await cookies();
  const cookieString = cookieStore.toString();

  const response = await apiFetch.post(
    "/api/v1/chats",
    {
      title: "New Chat",
    },
    {
      headers: { Cookie: cookieString },
    },
  );

  return response.data;
}

export async function sendMessage(chatId: string, content: string) {
  const cookieStore = await cookies();
  const cookieString = cookieStore.toString();

  try {
    const res = await apiFetch.post("/api/v1/chats/${chatId}/messages", {
      headers: { Cookie: cookieString },
      content: content,
    });
    console.log("Data sent successfully ", res.data);
  } catch (error) {
    console.error("Error sending data:", error);
  }
}
