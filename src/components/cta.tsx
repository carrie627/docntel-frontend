export default function CTA() {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-700 to-indigo-700 px-8 py-16 text-center backdrop-blur-2xl lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

        <div className="relative z-10">
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Build smarter AI experiences with your knowledge.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-100">
            Fast retrieval. Accurate answers. Professional AI workspace for
            modern teams and developers.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-2xl bg-white px-8 py-4 text-base font-semibold text-black transition hover:bg-gray-200 cursor-pointer">
              Launch Demo
            </button>

            <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-white backdrop-blur-xl transition hover:bg-white/10 cursor-pointer">
              Open Workspace
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
