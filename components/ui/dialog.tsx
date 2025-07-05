import { ReactNode } from 'react';

export function Dialog({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export function DialogTrigger({ asChild, children }: { asChild?: boolean; children: ReactNode }) {
  return <>{children}</>;
}

export function DialogContent({ children }: { children: ReactNode }) {
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md max-w-sm w-full">{children}</div>
    </div>
  );
}

export function DialogHeader({ children }: { children: ReactNode }) {
  return <div className="mb-2">{children}</div>;
}

export function DialogTitle({ children }: { children: ReactNode }) {
  return <h2 className="text-lg font-semibold">{children}</h2>;
}