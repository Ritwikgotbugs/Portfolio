'use client';

import { useStaggeredAnimation } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoIosAt } from 'react-icons/io';
import MobileHome from '../components/MobileHome';
import { Badge } from '../components/ui/badge';

export default function AboutPage() {

  const router = useRouter();

  const aboutSections = [
    { type: 'title' },
    { type: 'subtitle' },
    { type: 'skills' },
    { type: 'contacts' }
  ];
  const aboutAnimations = useStaggeredAnimation(aboutSections, 200);

  const handleEnter = useCallback(() => {
    router.push('/experience');
  }, [router]);

  const handleBackSpace = useCallback(() => {
    router.push('/projects');
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

  const skills = {
    languages: ['C/C++', 'Python', 'JavaScript', 'TypeScript'],
    frameworks: [
      'ReactJs', 'NodeJs', 'Flask', 'NextJs', 'TailwindCSS', 'Flutter', 'React Native', 'ExpressJS'
    ],
    devops: [
      'AWS', 'Docker', 'Firebase/Supabase', 'MongoDB', 'MySQL'
    ]
  };

  return (
    <>
      <div className="block md:hidden">
        <MobileHome />
      </div>
      <div className="hidden md:block">
        <div className="flex flex-col space-y-6 px-5 relative h-full">
          <div
            style={aboutAnimations[0].style}
            className={`${aboutAnimations[0].className}`}
          >
            <h1 className="text-4xl font-bold leading-tight text-zinc-300">about</h1>
          </div>

          <div
            style={aboutAnimations[1].style}
            className={`text-zinc-500 text-lg ${aboutAnimations[1].className}`}
          >
            making things work — a software engineer.
          </div>

          <div
            style={aboutAnimations[2].style}
            className={`text-zinc-400 text-base ${aboutAnimations[2].className}`}
          >
            <div className="mb-1 flex items-center gap-1 flex-wrap">
              <span className="font-semibold text-zinc-300 mr-2">Languages:</span>
              {skills.languages.map(skill => (
                <Badge key={skill} variant='default' className='bg-zinc-800 text-zinc-300'>
                  {skill}
                </Badge>
              ))}
            </div>
            <div className="mb-1 flex items-center gap-1 flex-wrap">
              <span className="font-semibold text-zinc-300 mr-2">Frameworks:</span>
              {skills.frameworks.map(skill => (
                <Badge key={skill} variant='default' className='bg-zinc-800 text-zinc-300'>
                  {skill}
                </Badge>
              ))}
            </div>
            <div className="flex items-center gap-1 flex-wrap">
              <span className="font-semibold text-zinc-300 mr-2">DevOps and Databases:</span>
              {skills.devops.map(skill => (
                <Badge key={skill} variant='default' className='bg-zinc-800 text-zinc-300'>
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div
            style={aboutAnimations[3].style}
            className={`space-y-2 text-zinc-400 text-sm ${aboutAnimations[3].className}`}
          >
            <p>
              <IoIosAt className="inline mr-3 text-zinc-400 text-xl" />
              <a
                href="mailto:ritwiksharma.tech@gmail.com"
                className="text-blue-400 hover:underline"
              >
                ritwiksharma.tech@gmail.com
              </a>
            </p>

            <p>
              <FaGithub className="inline mr-3 text-xl" />
              <a
                href="https://github.com/ritwikgotbugs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                github.com/ritwikgotbugs
              </a>
            </p>

            <p>
              <FaLinkedin className="inline mr-3 text-xl" />
              <a
                href="https://linkedin.com/in/sharmaritwik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                linkedin.com/in/sharmaritwik
              </a>
            </p>

            <p>
              <FaFileAlt className="inline mr-3 text-xl" />
              <a
                href="https://drive.google.com/file/d/18Pc0hcDXYd-TR6honOhJxmkC__RBLt2M/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                View Resume
              </a>
            </p>
          </div>

          <div className="fixed bottom-4 right-4 text-zinc-500 text-sm flex items-center gap-2">
            <span className="bg-zinc-800 text-zinc-200 px-2 py-1 rounded-md border border-zinc-600 text-xs">Enter</span>
            <span className="text-zinc-400">to go forward</span>
            <span className="bg-zinc-800 text-zinc-200 px-2 py-1 rounded-md border border-zinc-600 text-xs">Backspace</span>
            <span className="text-zinc-400">to go back</span>
          </div>

          {/* <TerminalUI /> */}
        </div>
      </div>
    </>
  );
}
