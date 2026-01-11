'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import type { Creator } from '@/lib/creators';

export function CreatorsList({ creators }: { creators: Creator[] }) {
  const t = useTranslations('Creators');

  const formatFollowers = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(0)}K`;
    }
    return count.toString();
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {creators.map((creator) => (
        <div
          key={creator.id}
          className="rounded-lg border border-black/[.08] dark:border-white/[.145] p-4 hover:bg-black/[.02] dark:hover:bg-white/[.02] transition-colors"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-black/[.05] dark:bg-white/[.06]">
              <Image
                src={creator.avatar}
                alt={creator.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm truncate">{creator.name}</h3>
              <p className="text-xs text-black/60 dark:text-white/60 truncate">
                @{creator.username}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="px-2 py-1 rounded bg-black/[.05] dark:bg-white/[.06]">
              {creator.category}
            </span>
            <span className="text-black/60 dark:text-white/60">
              {formatFollowers(creator.followers)} {t('followers')}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
