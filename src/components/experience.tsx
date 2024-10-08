import React from 'react';
import { Badge } from './ui/badge';


interface ExperienceProps {
    tech: string[];
    organization: string;
    role: string;
    duration: string;
    url: string;
    location: string;
    description: string[];
}

export const Experience = ({ tech,organization,role,url,duration,location,description }: ExperienceProps) => {
  return (
    <div className='flex flex-col w-3/4 md:w-1/2 justify-center items-start font-mono mt-5'>
        <div className='flex md:flex-row flex-col gap-x-4 items-start justify-start md:justify-center md:items-center'>
            <div>
                <div className='text-xl flex font-bold text-green-500' >{role}</div>
            </div>
            <p className='text-xs'>{duration}</p>
        </div>
        <div className='text-md flex cursor-pointer hover:text-blue-400 transition-all ease-in-out' onClick={()=> window.open(url)}>{organization}</div>
        <div className='text-md flex text-slate-500'>{location}</div>
        <div className="flex flex-wrap gap-1 py-2 cursor-pointer">
          {tech.map((tech, index) => (
            <Badge key={index} variant="custom" className=''>{tech}</Badge>
          ))}
        </div>
        <div className='p-3 gap-y-2'>
        {description.map((desc, index) => (
            <p key={index} className='text-sm p-1'>- {desc}</p>
        ))}
        </div>
    </div>
  );
};
