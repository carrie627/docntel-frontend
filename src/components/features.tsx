export default function Features() {
  return (
    <section id="features" className="px-6 py-20 lg:px-8">
      <div className="mb-14 max-w-2xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-violet-500">
          Features
        </p>

        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
          Built for modern AI-powered knowledge retrieval.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: "Hybrid Retrieval",
            description:
              "Combine vector search and keyword search for accurate contextual answers.",
          },
          {
            title: "Streaming Responses",
            description:
              "Deliver responses token-by-token with real-time websocket streaming.",
          },
          {
            title: "Source Citations",
            description:
              "Show grounded answers with references and highlighted chunks.",
          },
          {
            title: "Multi-Document AI",
            description:
              "Query across PDFs, webpages, markdown files, and knowledge bases.",
          },
        ].map((feature) => (
          <div
            key={feature.title}
            className="group rounded-3xl bg-violet-700 p-8 transition hover:-translate-y-1 hover:border-violet-500/30 hover:bg-violet-800"
          >
            <div className="mb-5 h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-400" />

            <h3 className="mb-3 text-xl font-semibold text-white">
              {feature.title}
            </h3>

            <p className="leading-7 text-gray-100">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
