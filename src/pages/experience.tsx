'use client';

import { useStaggeredAnimation } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { Experience } from '../components/experience';

interface ExperienceProps {
    tech: string[];
    organization: string;
    role: string;
    duration: string;
    url: string;
    location: string;
    description: string[];
}

const fetchExperience = async (): Promise<ExperienceProps[]> => {
  const response = await fetch('/experience.json');
  if (!response.ok) {
    throw new Error('Failed to fetch experience data');
  }
  return response.json();
};

export default function ExperiencePage() {
  const [experiences, setExperience] = useState<ExperienceProps[]>([]); 
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const experienceAnimations = useStaggeredAnimation(experiences, 200);

  const handleEnter = useCallback(() => {
    router.push('/projects');
  }, [router]);

  const handleBackSpace = useCallback(() => {
    router.push('/');
  }, [router]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Backspace') {
        handleBackSpace();
      }
      if (e.key === 'Enter') {
        handleEnter();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleEnter, handleBackSpace]);

  useEffect(() => {
    const loadExperience = async () => {
      try {
        const data = await fetchExperience();
        setExperience(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadExperience();
  }, []);

  if (loading) {
    return (
      <div className={`flex gap-5 flex-col animate-fadeInUp pb-10`}>
        <h1 className="text-4xl font-bold leading-tight">
          <span className="text-zinc-300 px-5">
            experience
          </span>
        </h1>
        <div className="flex justify-center items-center h-64">
          <div className="text-zinc-500">Loading experience...</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex gap-5 flex-col animate-fadeInUp pb-10`}>
      <h1 className="text-4xl font-bold leading-tight">
        <span className="text-zinc-300 px-5">
          experience
        </span>
      </h1>
      {experiences.map((experience, index) => (
        <div 
          key={index} 
          style={experienceAnimations[index].style}
          className={`rounded-4xl px-5 ${experienceAnimations[index].className}`}
        >
          <Experience {...experience}  />
        </div>
      ))}
    </div>
  );
}
