import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  href?: string;
}

export function Button({ variant = 'primary', className, href, children, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full whitespace-nowrap";
  
  const variants = {
    primary: "bg-[#051A24] text-white px-7 py-3 hover:bg-[#0D212C] shadow-[0_1px_2px_0_rgba(5,26,36,0.1),0_4px_4px_0_rgba(5,26,36,0.09),0_9px_6px_0_rgba(5,26,36,0.05),0_17px_7px_0_rgba(5,26,36,0.01),0_26px_7px_0_rgba(5,26,36,0),inset_0_2px_8px_0_rgba(255,255,255,0.5)]",
    secondary: "bg-white text-[#051A24] px-7 py-3 shadow-[0_0_0_0.5px_rgba(0,0,0,0.05),0_4px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_0_0_0.5px_rgba(0,0,0,0.05),0_8px_40px_rgba(0,0,0,0.12)]",
    tertiary: "bg-white text-[#051A24] px-7 py-3 shadow-[0_1px_2px_0_rgba(5,26,36,0.1),0_4px_4px_0_rgba(5,26,36,0.09),0_9px_6px_0_rgba(5,26,36,0.05),0_17px_7px_0_rgba(5,26,36,0.01),0_26px_7px_0_rgba(5,26,36,0),inset_0_2px_8px_0_rgba(255,255,255,0.5)] border border-[#051A24]/5 hover:bg-gray-50",
  };

  const Component = href ? 'a' : 'button';
  const additionalProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Component
      className={cn(baseStyles, variants[variant], className)}
      {...additionalProps}
      {...(props as any)}
    >
      {children}
    </Component>
  );
}
