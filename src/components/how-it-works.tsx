export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-20 lg:px-8">
      <div className="mb-14 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-violet-500">
          Workflow
        </p>

        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
          Simple workflow. Powerful retrieval.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            step: "01",
            title: "Upload Documents",
            description:
              "Drag and drop PDFs, markdown files, or knowledge sources.",
          },
          {
            step: "02",
            title: "Index & Embed",
            description:
              "Automatically chunk, embed, and optimize for retrieval.",
          },
          {
            step: "03",
            title: "Ask Anything",
            description:
              "Chat naturally and receive grounded AI-generated answers.",
          },
        ].map((item) => (
          <div
            key={item.step}
            className="rounded-3xl border border-black/10 bg-gradient-to-b from-white/5 to-transparent p-8"
          >
            <span className="text-5xl font-bold text-gray-700">
              {item.step}
            </span>

            <h3 className="mt-6 text-2xl font-semibold text-gray-900">
              {item.title}
            </h3>

            <p className="mt-4 leading-7 text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
