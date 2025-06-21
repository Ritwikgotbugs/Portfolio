'use client';

import { useStaggeredAnimation } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { ProjectsTile } from '../components/projects';

interface ProjectsTileProps {
  title: string;
  subtitle: string;
  img1: string;
  img2: string;
  githubUrl: string;
  url: string;
  stack: string[];
  logo: string;
}

const fetchProject = async (): Promise<ProjectsTileProps[]> => {
  const response = await fetch('/projects.json');
  if (!response.ok) {
    throw new Error('Failed to fetch projects data');
  }
  return response.json();
};

export default function Projects() {
  const [projects, setProjects] = useState<ProjectsTileProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  
  const projectAnimations = useStaggeredAnimation(projects, 100);
  
  const handleEnter = useCallback(() => {
    router.push('/');
  }, [router]);

  const handleBackSpace = useCallback(() => {
    router.push('/experience');
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
    const loadProjects = async () => {
      try {
        const data = await fetchProject();
        setProjects(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex gap-5 flex-col animate-fadeInUp pb-10">
        <h1 className="text-4xl font-bold leading-tight mb-3">
          <span className="text-zinc-300 px-5">
            projects
          </span>
        </h1>
        <div className="flex justify-center items-center h-64">
          <div className="text-zinc-500">Loading projects...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex gap-5 flex-col animate-fadeInUp pb-10">
        <h1 className="text-4xl font-bold leading-tight mb-3">
          <span className="text-zinc-300 px-5">
            projects
          </span>
        </h1>
        <div className="flex justify-center items-center h-64">
          <p className="text-red-500 font-mono">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex gap-5 flex-col animate-fadeInUp pb-10`}>
      <h1 className="text-4xl font-bold leading-tight mb-3">
        <span className="text-zinc-300 px-5">
          projects
        </span>
      </h1>
      <div className="flex justify-center px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              style={projectAnimations[index].style}
              className={`${projectAnimations[index].className} w-full h-full`}
            >
              <ProjectsTile {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
