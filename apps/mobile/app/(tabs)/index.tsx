import { useCallback, useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import { YStack } from 'tamagui';
import { useQueryClient } from '@tanstack/react-query';
import { Header, HeroSlider, PopularGamesSection } from '@casino/shared-ui';
import { colors } from '@casino/config';

export default function HomeScreen() {
  const queryClient = useQueryClient();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await queryClient.refetchQueries({ type: 'active' });
    setRefreshing(false);
  }, [queryClient]);

  return (
    <ScrollView
      style={{ backgroundColor: '#000' }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={colors.secondBackground} />
      }
    >
      <YStack flex={1} backgroundColor="$background" padding="$md" gap="$md">
        <Header notificationCount={2} onNotificationsPress={() => {
          console.log('Notifications pressed');
        }} />
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
    </ScrollView>
  );
}
