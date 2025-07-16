import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { LogoIcon } from '@/components/icons/logo-icon';
import { Providers } from '@/providers';

function RegistryHeader() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <LogoIcon className="h-6 w-6" />
            <span className="font-bold">Jibbit</span>
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link href="/registry" className="text-sm font-medium">
            Registry
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}

export default function RegistryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <div className="min-h-screen bg-background">
        <RegistryHeader />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </div>
    </Providers>
  );
}
