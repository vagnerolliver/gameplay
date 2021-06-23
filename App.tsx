import React from 'react';
import {Background} from './src/components/Background';
import {SignIn} from './src/screens/SignIn';
export default function App() {
  return (
    <Background>
      <SignIn />
    </Background>
  );
}
