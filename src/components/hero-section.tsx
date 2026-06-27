"use client";

import { useState } from "react";
import { motion, useTime, useTransform } from "motion/react";
import Link from "next/link";

export default function Hero() {
  const time = useTime();
  const rotate = useTransform(time, [0, 3000], [0, 300], { clamp: false });
  const rotationBg = useTransform(
    rotate,
    (r) =>
      `conic-gradient(from ${r}deg, #ffffff, rgb(255, 0, 60) 50%, #311aff 85%, #ffffff)`,
  );

  // States
  const [isHovered, setIsHovered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <section className="relative flex h-[calc(100vh-60px)] gap-20 px-6 py-24 lg:flex-row lg:px-8 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>
      <div className="flex flex-col justify-center w-1/2">
        <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-violet-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-700 backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-indigo-700" />
          Intelligent RAG Workspace for Modern Teams
        </div>
        <h1 className="text-7xl font-extrabold">
          Chat with your{" "}
          <span className="block my-4 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            documents
          </span>{" "}
          intelligently
        </h1>
        <p className="text-lg font-normal my-6 py-2 pr-6">
          Upload your PDFs and documents and get instant AI powered answers,
          streaming responses and hybrid retrieval.
        </p>

        <div className="flex items-center justify-start gap-4">
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Link
              href="/demo"
              className="relative text-lg bg-white font-medium border border-gray-400 flex items-center justify-center py-3 px-4 w-40 rounded-lg z-10 hover:border-white"
            >
              Try demo
            </Link>

            <motion.div
              className="absolute -inset-px rounded-lg"
              style={{
                background: isHovered
                  ? rotationBg
                  : "linear-gradient(rgba(244, 235, 235, 0.1), rgba(255, 255, 255, 0.1))",
              }}
            ></motion.div>
          </div>
          <Link
            href={isLoggedIn ? "/chat" : "/signup"}
            className="text-lg text-gray-200 font-medium bg-indigo-700 flex items-center justify-center py-3 px-4 w-40 rounded-lg px-3"
          >
            Get started
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-400" />
            Streaming AI
          </div>

          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-cyan-400" />
            Hybrid Search
          </div>

          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-violet-400" />
            Source Citations
          </div>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center relative">
        <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-2xl">
          {/* Window Header */}
          <div className="mb-5 flex items-center gap-2 border-b border-white/10 pb-4">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          {/* Chat UI */}
          <div className="space-y-5">
            <div className="ml-auto max-w-md rounded-2xl rounded-br-md bg-violet-700 px-5 py-4 text-sm leading-7 text-white shadow-lg shadow-violet-500/20">
              Summarize the company revenue growth from the uploaded annual
              report.
            </div>

            <div className="max-w-lg rounded-2xl rounded-bl-md border border-white/10 bg-[#2E073F]/95 px-5 py-4 text-sm leading-7 text-zinc-300 backdrop-blur-xl">
              Revenue increased by <span className="text-cyan-300">28%</span>{" "}
              year-over-year, driven primarily by enterprise subscription growth
              and international expansion.
              <div className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-xs text-cyan-200">
                Source: Annual_Report_2025.pdf · Page 12
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <div className="flex gap-1">
                <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-400" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-400 [animation-delay:0.2s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-400 [animation-delay:0.4s]" />
              </div>
              AI is generating response...
            </div>
          </div>

          {/* Floating Cards */}
          <div className="absolute -left-10 top-17 hidden rounded-2xl border border-white/10 bg-[#2E073F] p-4 backdrop-blur-xl lg:block">
            <p className="text-xs text-zinc-400">Latency</p>
            <h3 className="mt-1 text-2xl font-bold text-white">1.2s</h3>
          </div>

          <div className="absolute -bottom-10 right-6 hidden rounded-2xl border border-white/10 bg-[#2E073F] p-4 backdrop-blur-xl lg:block">
            <p className="text-xs text-zinc-400">Documents Indexed</p>
            <h3 className="mt-1 text-2xl font-bold text-white">14,892</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
