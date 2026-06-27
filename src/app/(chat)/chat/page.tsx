export default async function ChatPage() {
  return (
    <div className="absolute bottom-[50%] mb-14 text-center w-full">
      <h1 className="text-6xl font-bold tracking-tight bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text bg-clip-text text-transparent">
        Ask your documents anything
      </h1>

      <p className="mx-auto mt-3 max-w-2xl text-normal leading-8 text-gray-700">
        Experience grounded AI retrieval with streaming responses and source
        citations.
      </p>
    </div>
  );
}
