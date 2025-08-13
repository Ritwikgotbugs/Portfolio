import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoIosAt } from 'react-icons/io';
import { Experience as ExperienceCard } from './experience';
import { ProjectsTile } from './projects';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

interface ExperienceProps {
  tech: string[];
  organization: string;
  role: string;
  duration: string;
  url: string;
  location: string;
  description: string[];
}

interface ProjectsTileProps {
  title: string;
  subtitle: string;
  img1: string;
  img2: string;
  githubUrl: string;
  url:string;
  stack: string[];
  logo: string;
}

export default function MobileHome() {
  const [experience, setExperience] = useState<ExperienceProps[]>([]);
  const [projects, setProjects] = useState<ProjectsTileProps[]>([]);

  useEffect(() => {
    fetch('/experience.json').then(res => res.json()).then(setExperience);
    fetch('/projects.json').then(res => res.json()).then(setProjects);
  }, []);

  return (
    <div className="block md:hidden w-full min-h-screen bg-black text-white px-2 pb-8 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center pt-6 pb-4">
        <Image src="/assets/avatar.png" alt="avatar" width={96} height={96} className="w-24 h-24 rounded-full object-cover mb-2" />
        <div className="text-xl font-bold text-zinc-200">Ritwik Sharma</div>
        <div className="text-sm text-zinc-400 mb-2 italic">Software Engineer</div>
        <a
          href="https://drive.google.com/file/d/18Pc0hcDXYd-TR6honOhJxmkC__RBLt2M/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zinc-900 text-white px-6 py-2 rounded-md text-xs font-semibold hover:bg-zinc-700 transition"
        >
          Resume
        </a>
      </div>

      <div className="mb-4 rounded-lg">
        <div className="text-lg font-bold text-zinc-300 mb-1">about</div>
        <div className="text-zinc-400 text-xs mb-4">
          making things work — a software engineer.
        </div>
        <div className="flex flex-col gap-1 mt-2">
          <a href="mailto:ritwiksharma.tech@gmail.com" className="flex items-center gap-2 text-blue-400 text-xs"><IoIosAt /> ritwiksharma.tech@gmail.com</a>
          <a href="https://github.com/ritwikgotbugs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 text-xs"><FaGithub /> github.com/ritwikgotbugs</a>
          <a href="https://linkedin.com/in/sharmaritwik" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 text-xs"><FaLinkedin /> linkedin.com/in/sharmaritwik</a>
        </div>
      </div>

      <div className="mt-2 mb-2 flex flex-col items-center w-full">
        <div className="text-lg font-semibold text-zinc-200 ">Experience</div>
        <div className="text-xs text-zinc-600 mb-1">swipe left</div>
        <div className="w-full">
          <Carousel className="w-full">
            <CarouselContent>
              {experience.map((exp, idx) => (
                <CarouselItem key={idx} className="px-2">
                  <div className="rounded-lg px-6 justify-end">
                    <ExperienceCard {...exp} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      <div className="flex flex-col items-center w-full">
        <div className="text-lg font-semibold text-zinc-200">Projects</div>
        <div className="text-xs text-zinc-600 mb-1">swipe left</div>
        <div className="w-full">
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((proj, idx) => (
                <CarouselItem key={idx} className="p-2">
                  <div className="rounded-lg px-6">
                    <ProjectsTile {...proj} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      <hr className="w-full mx-4 mb-4 mt-6 border-1 border-zinc-800" />
      <div className="flex flex-row items-center gap-2 mb-2">
        <div className="flex gap-2 text-xl">
          <a href="https://github.com/ritwikgotbugs" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/sharmaritwik" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
            <FaLinkedin />
          </a>
        </div>
        <a
          href="https://drive.google.com/file/d/18Pc0hcDXYd-TR6honOhJxmkC__RBLt2M/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white px-4 py-2 rounded-md text-xs font-semibold transition border border-zinc-700"
        >
          Resume
        </a>
      </div>
    </div>
  );
} 