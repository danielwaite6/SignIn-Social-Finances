import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { Routes } from './src/routes';
import theme from './src/global/styles/theme';

import { AuthContext } from './src/AuthContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular, Poppins_500Medium, Poppins_700Bold
  });
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={[]}>
        <Routes />
      </AuthContext.Provider>
    </ThemeProvider>
  )

}
