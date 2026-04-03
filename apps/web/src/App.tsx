import { YStack } from 'tamagui';
import { Header, HeroSlider, mockHeroSlides } from '@casino/shared-ui';
import { useState } from 'react';

function App() {
  const [balance, setBalance] = useState(12405.20);

  const handleRefresh = () => {
    const delta = Math.random() * 200 - 80;
    setBalance((prev) => Math.max(0, prev + delta));
  };

  return (
    <YStack backgroundColor="$background" gap="$md" minHeight="100%">
      <Header
        brandName="Nuke"
        userName="David"
        balance={balance}
        notificationCount={2}
        onRefreshPress={handleRefresh}
      />

      <YStack paddingHorizontal="$md" gap="$md">
        <HeroSlider
          slides={mockHeroSlides}
          onCtaPress={(slide) => {
            console.log('CTA pressed:', slide.title);
          }}
        />
      </YStack>
    </YStack>
  );
}

export default App;