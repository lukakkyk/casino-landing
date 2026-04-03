
import { Image, Text, XStack, YStack, Circle } from 'tamagui';

type GameCardProps = {
    playersCount: number;
    image: string;
};

export function GameCard({
    playersCount,
    image,
}: GameCardProps) {
    return (
        <YStack width={164} gap="$sm" alignItems="center">
            <YStack
                width={170}
                height={214}
                borderRadius="$lg"
                overflow="hidden"
            >
                <Image
                    src={image}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                />
            </YStack>

            <XStack alignItems="center" paddingHorizontal="$xs" gap="$xs">
                <Circle size="$xs" backgroundColor="$success" />
                <Text color="$secondBackground" fontSize="$sm" fontWeight="600">
                    {playersCount} Playing
                </Text>
            </XStack>
        </YStack>
    );
}