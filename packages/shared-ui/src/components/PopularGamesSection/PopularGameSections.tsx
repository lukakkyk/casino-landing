import { Platform, useWindowDimensions } from 'react-native';
import { ScrollView, Text, XStack, YStack } from 'tamagui';
import { usePopularGames, type PopularGame } from '@casino/shared-api';
import { GameCard } from '../GameCard/GameCard';

type PopularGamesSectionProps = {
    onCardPress?: (game: PopularGame) => void;
    onViewAllPress?: () => void;
};

export function PopularGamesSection({
    onCardPress,
    onViewAllPress,
}: PopularGamesSectionProps) {
    const { data: games = [] } = usePopularGames();
    const { width } = useWindowDimensions();
    const isWeb = Platform.OS === 'web';
    const isDesktop = width >= 1024;
    const isTablet = width >= 768;

    const sectionMaxWidth = 1280;

    const gridGap = isDesktop ? 20 : isTablet ? 16 : 12;
    const columns = width >= 1440 ? 5 : width >= 1200 ? 4 : width >= 900 ? 3 : 2;

    return (
        <YStack width="100%" gap="$md">
            <XStack
                width="100%"
                maxWidth={sectionMaxWidth}
                alignSelf="center"
                justifyContent="space-between"
                alignItems="center"
            >
                <Text
                    color="$secondBackground"
                    fontSize={isDesktop ? 34 : 18}
                    fontWeight="800"
                    letterSpacing={-0.5}
                >
                    Popular games
                </Text>

                <Text
                    color="$secondBackground"
                    fontSize={isDesktop ? 18 : 15}
                    fontWeight="700"
                    cursor={onViewAllPress ? 'pointer' : undefined}
                    onPress={onViewAllPress}
                    opacity={0.9}
                >
                    View all
                </Text>
            </XStack>

            {isWeb && isTablet ? (
                <XStack width="100%" justifyContent="center">
                    <XStack
                        width="100%"
                        maxWidth={sectionMaxWidth}
                        flexWrap="wrap"
                        gap={gridGap}
                        justifyContent={columns >= 4 ? 'flex-start' : 'center'}
                    >
                        {games.map((game) => (
                            <GameCard
                                key={game.id}
                                imageUrl={game.imageUrl}
                                playersCount={game.playersCount}
                                onPress={() => onCardPress?.(game)}
                            />
                        ))}
                    </XStack>
                </XStack>
            ) : (
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingRight: 16,
                    }}
                >
                    <XStack gap="$md">
                        {games.map((game) => (
                            <GameCard
                                key={game.id}
                                imageUrl={game.imageUrl}
                                playersCount={game.playersCount}
                                onPress={() => onCardPress?.(game)}
                            />
                        ))}
                    </XStack>
                </ScrollView>
            )}
        </YStack>
    );
}