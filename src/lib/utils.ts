import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const createStaggeredAnimation = (delay: number = 300) => {
  return (index: number) => ({
    animationDelay: `${index * delay}ms`,
    animationFillMode: 'both' as const,
  });
};

export const fadeInUpClasses = {
  'animate-fadeInUp': 'animate-fadeInUp',
  'animate-fadeInUp-delayed': 'animate-fadeInUp-delayed',
};

export const useStaggeredAnimation = (items: unknown[], delay: number = 300) => {
  return items.map((_, index) => ({
    style: createStaggeredAnimation(delay)(index),
    className: 'animate-fadeInUp',
  }));
};
  