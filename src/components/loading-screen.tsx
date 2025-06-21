import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
}

const quotes = [
  {
    text: "The best way to predict the future is to invent it.",
    author: "— Alan Kay"
  },
  {
    text: "Code is like humor. When you have to explain it, it's bad.",
    author: "— Cory House"
  },
  {
    text: "The only way to learn a new programming language is by writing programs in it.",
    author: "— Dennis Ritchie"
  },
  {
    text: "Programming isn't about what you know; it's about what you can figure out.",
    author: "— Chris Pine"
  },
  {
    text: "The most damaging phrase in the language is 'We've always done it this way.'",
    author: "— Grace Hopper"
  },
  {
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "— Martin Fowler"
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "— John Johnson"
  },
  {
    text: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
    author: "— Dan Salomon"
  },
  {
    text: "It's not a bug – it's an undocumented feature.",
    author: "— Anonymous"
  },
  {
    text: "The best error message is the one that never shows up.",
    author: "— Thomas Fuchs"
  }
];

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCurrentQuote(randomQuote);
  }, []);

  return (
    <div 
      className={`fixed inset-0 bg-[#171717] z-50 flex items-center justify-center transition-all duration-600 ease-in-out ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="text-center max-w-4xl px-6">
        <div className="text-2xl font-bold text-zinc-300 mb-4">
          &quot;{currentQuote.text}&quot;
        </div>
        <div className="text-lg text-zinc-500 italic">
          {currentQuote.author}
        </div>
        <div className="mt-8">
          <div className="inline-block w-8 h-8 border-4 border-zinc-600 border-t-zinc-300 rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
} 