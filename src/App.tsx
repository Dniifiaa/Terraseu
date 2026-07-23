import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Page from './app/page';

export default function App() {
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  );
}
