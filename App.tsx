import React from 'react';
import { Background } from './src/components/Background';
import { Routes } from './src/routes';

import { AuthProvider } from './src/hooks/auth';

export default function App() {
  return (
    <Background>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
  );
}
