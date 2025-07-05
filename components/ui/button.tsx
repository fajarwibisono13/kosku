import { ButtonHTMLAttributes } from 'react';

export function Button({
  children,
  variant = 'default',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default' | 'outline' }) {
  const base = 'px-4 py-2 rounded text-sm font-medium';
  const style =
    variant === 'outline'
      ? 'border border-gray-400 text-gray-700 bg-white'
      : 'bg-blue-600 text-white hover:bg-blue-700';
  return <button className={`${base} ${style}`} {...props}>{children}</button>;
}