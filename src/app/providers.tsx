'use client';
import React from 'react';
import UIProvider from 'src/providers/ui-context';

export default function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <UIProvider>{children}</UIProvider>;
}
