import Stream from "stream";
import { apiFetch } from "./api";

export async function uploadDocument(file: File, chatId: string) {
  const formData = new FormData();

  formData.append("file", file);

  const response = await apiFetch.post(
    `/api/v1/chats-doc/${chatId}/documents`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );

  return response.data;
}
