'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RulesPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirection automatique vers le wiki
    router.push('/wiki');
  }, [router]);

  return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-orange mx-auto mb-4"></div>
        <p className="text-white text-xl">Redirection vers le Wiki...</p>
      </div>
    </main>
  );
}
