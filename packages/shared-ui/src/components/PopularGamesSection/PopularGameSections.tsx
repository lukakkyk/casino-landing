import { FlatList } from "react-native";
import { Text, XStack, YStack } from "tamagui";
import { GameCard } from "../GameCard/GameCard";
import { popularGames } from "../../data/mockGameCards";

export function PopularGamesSection() {
    return (
        <YStack gap="$xl">
            <XStack justifyContent="space-between" alignItems="center" gap="$md">
                <Text color="$secondBackground" fontSize="$lg" fontWeight="600">
                    Popular games
                </Text>

                <Text color="$secondBackground" fontSize="$md" fontWeight="600">
                    View all
                </Text>
            </XStack>
            <FlatList
                data={popularGames}
                keyExtractor={(item) => item.id}
                horizontal
                initialNumToRender={5}
                windowSize={5}
                removeClippedSubviews={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <GameCard {...item} />}
                contentContainerStyle={{
                    paddingHorizontal: 4,
                    gap: 16,
                }}
                ItemSeparatorComponent={() => <YStack width={16} />}
            />
        </YStack>
    );
}
