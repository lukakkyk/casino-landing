import { YStack } from 'tamagui';
import { Header, HeroSlider, PopularGamesSection } from '@casino/shared-ui';
import { colors } from '@casino/config';

export default function HomeScreen() {
  return (
    <YStack flex={1} backgroundColor={colors.background} padding="$md" gap="$md">
      <Header notificationCount={2} />
      <HeroSlider
        onCtaPress={(slide) => {
          console.log('CTA pressed:', slide.title);
        }}
      />
      <PopularGamesSection
        onCardPress={(game) => {
          console.log('Game pressed:', game.title);
        }}
        onViewAllPress={() => {
          console.log('View all pressed');
        }}
      />
    </YStack>
  );
}
