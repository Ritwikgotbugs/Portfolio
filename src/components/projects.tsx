'use client';

import { Badge } from "@/components/ui/badge";
import { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";

interface ProjectsTileProps {
  title: string;
  subtitle: string;
  img1: string;
  img2?: string;
  githubUrl: string;
  url: string;
  stack: string[];
  logo: string;
  isApp?: boolean;
  isLive?: boolean;
  isCodeLive?: boolean;
}

export const ProjectsTile = ({
  title,
  subtitle,
  githubUrl,
  url,
  stack,
  isLive = true,
  isCodeLive = true,
}: ProjectsTileProps) => {
  // const [previewImg, setPreviewImg] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* <Dialog open={!!previewImg} onClose={() => setPreviewImg(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <Dialog.Panel className="relative">
          <img src={previewImg || ''} alt="preview" className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-xl" />
          <button
            onClick={() => setPreviewImg(null)}
            className="absolute top-2 right-2 text-white text-xl bg-black/60 rounded-full w-8 h-8 flex items-center justify-center"
          >
            ✕
          </button>
        </Dialog.Panel>
      </Dialog> */}

      <div
        className={`flex flex-col md:bg-[#30303040] bg-[#30303030] rounded-xl md:rounded-md p-3 md:p-5 border-2 border-zinc-900 shadow-lg justify-between h-full`}
      >
          <div className="">
            <h1 className="text-lg md:text-xl font-bold text-blue-300 opacity-95 md:mb-2">{title}</h1>
            <p className={`text-xs md:text-sm text-gray-500 ${expanded ? '' : 'line-clamp-2'} md:mb-0`}>{subtitle}</p>
            <button className='text-xs cursor-pointer font-bold text-blue-500 mb-3' onClick={() => setExpanded(!expanded)}>{expanded ? 'Show less' : 'Read more'}</button>

            <div className="flex flex-wrap gap-1">
              {stack.map((tech, index) => (
                <Badge
                  key={index}
                  className="bg-zinc-800 text-gray-300 rounded-md text-[11px] md:text-xs"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-3 justify-end mt-auto pt-4">
            <div
              className={`w-full py-2 flex items-center justify-center text-black text-xs md:text-sm rounded-md ${
                isCodeLive ? 'bg-zinc-300 cursor-pointer hover:bg-white' : 'bg-zinc-800  cursor-not-allowed hidden'
              } transition`}
              onClick={() => isCodeLive && window.open(githubUrl, '_blank')}>
              <FaGithub className={`text-black mr-2 text-lg  ${!isCodeLive && 'opacity-30'}`} />code
            </div>
            <div
              className={` ${isLive ? '' : 'hidden'} w-full flex py-2 items-center text-xs md:text-sm justify-center text-black rounded-md bg-zinc-300 hover:bg-white cursor-pointer transition`}
              onClick={() => window.open(url, '_blank')}>
              <IoGlobeOutline className="text-black mr-2 text-lg" /> project
            </div>
          </div>


        {/* <div className={`relative ${isApp ? 'w-[180px] h-[200px]' : 'w-full mb-4 order-1'}`}>
          {isApp ? (
            <>
              <img
                src={img1}
                alt="img1"
                onClick={() => setPreviewImg(img1)}
                className="absolute top-0 left-0 w-[120px] h-[180px] object-contain rounded-md shadow z-20 cursor-pointer transition-transform hover:scale-105"
              />
              {img2 && (
                <img
                  src={img2}
                  alt="img2"
                  onClick={() => setPreviewImg(img2)}
                  className="absolute top-3 left-8 w-[120px] h-[180px] object-contain rounded-md shadow z-10 cursor-pointer transition-transform hover:scale-105"
                />
              )}
            </>
          ) : (
            <img
              src={img1}
              alt="img1"
              onClick={() => setPreviewImg(img1)}
              className="w-full h-[200px] object-contain rounded-md shadow cursor-pointer transition-transform hover:scale-105"
            />
          )}
        </div> */}
      </div>
    </>
  );
};
