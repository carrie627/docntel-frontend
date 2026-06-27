import Link from "next/link";

export default function AuthPageHeader() {
  return (
    <div className="w-full h-[70px] border-b border-white/10">
      <div className="h-full w-full flex justify-between items-center lg:px-8 py-8">
        <Link href="/" className="flex items-center justify-center gap-2">
          <div className="flex items-center justify-center text-xl font-bold bg-linear-to-r from-violet-700 to-violet-700 size-10 rounded-md text-gray-100">
            D
          </div>
          <div className="flex flex-col justify-center mt-2 mb-2">
            <span className="font-bold text-lg">Docntel</span>
            <span className="font-normal text-xs">AI Knowledge Workspace</span>
          </div>
        </Link>

        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/login"
            className="bg-linear-to-r from-violet-700 to-violet-700 text-gray-100 flex items-center justify-center py-2 w-[70px] rounded-sm"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="bg-linear-to-r from-violet-700 to-violet-700 text-gray-100 flex items-center justify-center py-2 w-24 rounded-sm"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
