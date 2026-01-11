import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans flex items-center justify-center min-h-screen p-8 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Spun Swan
        </h1>
        <p className="text-2xl mb-4 text-black/80 dark:text-white/80">
          AI Chat Experience
        </p>
        <p className="text-lg mb-12 text-black/60 dark:text-white/60">
          Connect with 20 unique AI companions for intimate conversations
        </p>
        <Link
          href="/models"
          className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
        >
          Browse Models
        </Link>
      </div>
    </div>
  );
}
