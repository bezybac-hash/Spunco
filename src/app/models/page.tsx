import Link from "next/link";
import { aiModels } from "@/lib/models";

export default function ModelsPage() {
  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Spun Swan
          </h1>
          <p className="text-lg text-black/70 dark:text-white/70">
            Choose your AI companion for an intimate conversation
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {aiModels.map((model) => (
            <Link
              key={model.id}
              href={`/chat/${model.id}`}
              className="group block rounded-2xl border border-black/[.08] dark:border-white/[.145] p-6 transition-all hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/20 bg-white/50 dark:bg-black/50"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="text-6xl group-hover:scale-110 transition-transform">
                  {model.avatar}
                </div>
                <div className="w-full">
                  <h2 className="text-xl font-semibold mb-1 group-hover:text-pink-500 transition-colors">
                    {model.name}
                  </h2>
                  <p className="text-sm text-black/60 dark:text-white/60 mb-2">
                    {model.age} years old
                  </p>
                  <p className="text-sm text-black/70 dark:text-white/70 mb-3 line-clamp-2">
                    {model.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {model.interests.slice(0, 3).map((interest, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded-full bg-pink-500/10 text-pink-600 dark:text-pink-400"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto pt-4 w-full">
                  <div className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white text-sm font-medium group-hover:shadow-md transition-shadow">
                    Start Chat
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
