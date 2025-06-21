'use client';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp } from 'lucide-react';
import React from 'react';
import { FaAt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

interface Contact {
  label: string;
  icon: React.ReactNode;
  link: string;
}

const contacts: Contact[] = [
  { label: 'Email', icon: <FaEnvelope />, link: 'mailto:ritwiksharma.tech@gmail.com' },
  { label: 'GitHub', icon: <FaGithub />, link: 'https://github.com/Ritwikgotbugs' },
  { label: 'LinkedIn', icon: <FaLinkedin />, link: 'https://linkedin.com/in/sharmaritwik' },
];

export const CollapsibleContacts = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-full">
      <CollapsibleTrigger asChild>
        <div
          className={`flex items-center mt-2 py-2 px-5 rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
            open ? 'bg-transparent' : 'hover:bg-zinc-900'
          }`}
        >
          <div className={`text-xl mr-3 ${open ? 'text-white' : 'text-gray-600'}`}>
            <FaAt />
          </div>
          <span className={`text-[15px] flex-grow ${open ? 'text-white' : 'text-gray-600'}`}>
            contact
          </span>
          {open ? (
            <ChevronUp className="text-white h-4 w-4 transition-all duration-300" />
          ) : (
            <ChevronDown className="text-white h-4 w-4 transition-all duration-300" />
          )}
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent
        className="px-5 overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out"
        style={{
          maxHeight: open ? '500px' : '0px',
          opacity: open ? 1 : 0,
        }}
      >
        <div className="flex gap-[3px] mt-2">
          <div className="w-[2px] bg-zinc-800 rounded-full mx-2" />
          <div className="flex flex-col gap-2 font-mono px-2">
            {contacts.map((contact, index) => (
              <div
                key={index}
                onClick={() => window.open(contact.link, '_blank')}
                className="flex items-center gap-3 text-zinc-300 transition-colors duration-200 cursor-pointer px-2 py-1 rounded-lg hover:bg-zinc-900"
              >
                <span className="text-base">{contact.icon}</span>
                <span>{contact.label}</span>
              </div>
            ))}
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
