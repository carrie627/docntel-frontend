export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm lg:flex-row lg:px-8">
        <p>© 2026 Docntel. AI Knowledge Workspace.</p>

        <div className="flex items-center gap-6">
          <a href="#" className="transition hover:text-gray-500">
            Privacy
          </a>
          <a href="#" className="transition hover:text-gray-500">
            Terms
          </a>
          <a href="#" className="transition hover:text-gray-500">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
