"use client";

import React, { createContext, useContext, useState, useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { PageLoading } from '@/components/animation/page-loading';
import { Initial } from '@/components/animation/initial';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

function LoadingContent({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200); // 3.2 seconds loading duration

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  // Add effect to handle body scroll
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLoading]);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          {pathname === '/' ? <Initial /> : <PageLoading />}
        </div>
      )}
    </LoadingContext.Provider>
  );
}

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
        <PageLoading />
      </div>
    }>
      <LoadingContent>{children}</LoadingContent>
    </Suspense>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
} 