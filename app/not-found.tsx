'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function NotFoundContent() {
  const searchParams = useSearchParams();
  const from = searchParams.get('from');

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-muted-foreground mb-8">
        {from ? `The page "${from}" could not be found.` : "The page you're looking for doesn't exist."}
      </p>
      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}

export default function NotFound() {
  return (
    <Suspense fallback={
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-muted-foreground mb-8">Loading...</p>
      </div>
    }>
      <NotFoundContent />
    </Suspense>
  );
} 