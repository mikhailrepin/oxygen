import type { ReactNode } from 'react';
export default function EditorLayout({ children }: { children: ReactNode }) {
  return (
    <section className="page">
      {children}
    </section>
  )
}
