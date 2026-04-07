import { Stack } from 'expo-router';
import { TamaguiProvider } from 'tamagui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { colors, tamaguiConfig, } from '@casino/config';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
const queryClient = new QueryClient();
const BG = colors.background;

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <TamaguiProvider config={tamaguiConfig as any} defaultTheme="app">
        <SafeAreaProvider>
          <StatusBar style="light" backgroundColor={BG} />
          <SafeAreaView style={{ flex: 1, backgroundColor: BG }} edges={['top']}>
            <Stack screenOptions={{ headerShown: false }} />
          </SafeAreaView>
        </SafeAreaProvider>
      </TamaguiProvider>
    </QueryClientProvider>
  );
}