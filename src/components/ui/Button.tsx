import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:pointer-events-none disabled:opacity-50",
        {
          'bg-emerald-600 text-white shadow-sm hover:bg-emerald-700 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0': variant === 'primary',
          'bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-200': variant === 'secondary',
          'border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-900': variant === 'outline',
          'hover:bg-gray-100 text-gray-700 hover:text-gray-900': variant === 'ghost',
          'h-8 px-4 text-xs': size === 'sm',
          'h-10 px-6 text-sm': size === 'md',
          'h-12 px-8 text-base': size === 'lg',
        },
        className
      )}
      {...props}
    />
  );
}
