import { YStack } from 'tamagui';
import { Header, HeroSlider, mockHeroSlides } from '@casino/shared-ui';
import { useState } from 'react';


function App() {
  const [balance, setBalance] = useState(1245.75);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshError, setRefreshError] = useState<string | null>(null);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setRefreshError(null);

    setTimeout(() => {
      const failed = Math.random() < 0.25;
      if (failed) {
        setRefreshError('Failed to refresh');
      } else {
        const delta = (Math.random() * 120 - 40);
        setBalance((prev) => Math.max(0, prev + delta));
      }
      setIsRefreshing(false);
    }, 900);
  };
  return (
    <YStack minHeight="100vh" backgroundColor="$background" padding="$md" gap="$md">
      <Header
        userName="John"
        balance={balance}
        hasNotifications
        isRefreshing={isRefreshing}
        refreshError={refreshError}
        onRefresh={handleRefresh}
      />

      <HeroSlider
        slides={mockHeroSlides}
        onCtaPress={(slide) => {
          console.log('CTA pressed:', slide.title);
        }}
      />
    </YStack>
  );
}

export default App;