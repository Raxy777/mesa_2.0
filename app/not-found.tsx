'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import HeroBackground from '@/components/ui/hero-background';
import { Cog } from 'lucide-react';

function NotFoundFallback() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <HeroBackground />
      <div className="relative z-10 flex flex-col items-center gap-4">
        <Cog className="h-8 w-8 animate-spin-slow text-primary" />
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          LOADING...
        </span>
      </div>
    </section>
  );
}

function NotFoundContent() {
  const searchParams = useSearchParams();
  const from = searchParams.get('from');

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <HeroBackground />

      {/* Giant ghost 404 */}
      <span className="absolute inset-0 flex items-center justify-center font-display text-[10rem] sm:text-[14rem] font-bold text-foreground/[0.06] leading-none select-none pointer-events-none">
        404
      </span>

      <div className="container px-4 md:px-6 relative z-10 text-center space-y-6">
        <Cog className="h-10 w-10 mx-auto animate-spin-slow text-primary" />

        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
          ERROR // COMPONENT NOT FOUND
        </span>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          This part isn&apos;t in the <span className="text-gradient">assembly</span>.
        </h1>

        <p className="max-w-[560px] mx-auto text-muted-foreground text-lg leading-relaxed">
          {from
            ? `The page "${from}" could not be found.`
            : "The page you're looking for doesn't exist."}
        </p>

        {from && (
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            ATTEMPTED PATH: {from}
          </p>
        )}

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <Button asChild className="rounded-full">
            <Link href="/">Return home</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/contact">Report an issue</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function NotFound() {
  return (
    <Suspense fallback={<NotFoundFallback />}>
      <NotFoundContent />
    </Suspense>
  );
}
