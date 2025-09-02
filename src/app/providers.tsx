'use client';
import { ProgressProvider } from '@bprogress/next/app';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ProgressProvider
      height="4px"
      color="#89d83a"
      options={{ showSpinner: false, minimum: 0.4 }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
}