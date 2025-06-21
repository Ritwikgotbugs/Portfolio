'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';

export default function TerminalUI() {

    const router = useRouter();

    const handleEnter = useCallback(() => {
        router.push('/experience');
    }, [router]);

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                handleEnter();
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [handleEnter]);


  return (
    <>  
    <div className="w-full max-w-2xl mx-auto mt-5 bg-black rounded-lg shadow-lg font-mono text-sm border border-zinc-700 overflow-hidden">
      <div className="flex items-center px-4 py-2 bg-zinc-900">
        <div className="flex space-x-2">
          <span className="h-3 w-3 rounded-full bg-red-500"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
          <span className="h-3 w-3 rounded-full bg-green-500"></span>
        </div>
        <span className="ml-4 text-zinc-400 text-xs">bash</span>
      </div>

      <div className="p-4 text-white space-y-1 leading-relaxed">
          <span className="text-green-400">ritwik@craptop-Pro</span>
          <span className="text-zinc-400"> ~ %</span>{' '}
          <span className="text-blue-400">npx</span>{' '}
          <span className="text-white">ritwik-portfolio</span>
          <span className="text-blue-400">@latest</span>
          <span className="animate-pulse text-white mx-2 text-md">▍</span>
          <span className="text-gray-500 italic">#Press Enter to launch</span>
      </div>

    </div>
    {/* <button
        onClick={handleEnter}
        className="mt-2 px-4 py-2 bg-zinc-800 text-zinc-100 rounded border border-zinc-700 hover:bg-zinc-700 transition-all"
    >
        Press Enter
    </button> */}
    </>
  );
}
