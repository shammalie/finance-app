import type { ReactNode } from 'react';

import { Header } from '@/layout/components/header';
import { Meta } from '@/layout/components/meta';
import { ThemeProvider } from 'next-themes';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Meta />
      <div className="flex min-h-screen flex-col dark:bg-background dark:text-foreground">
        <Header />
        <main className="wrapper">{children}</main>
      </div>
    </ThemeProvider>
  );
};
