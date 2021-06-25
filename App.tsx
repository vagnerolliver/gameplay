import React from 'react';
import { LogBox } from 'react-native';

import { Background } from './src/components/Background';
import { Routes } from './src/routes';

import { AuthProvider } from './src/hooks/auth';

LogBox.ignoreLogs([
  'Constants.linkingUrl has been renamed to Constants.linkingUri.',
  'Constants.manifest is null because the embedded app.config could not be read.',
  'Constants.deviceId has been deprecated in favor of generating and storing your own ID.',
  'Constants.installationId has been deprecated in favor of generating and storing your own ID.',
]);

export default function App() {
  return (
    <Background>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
  );
}
